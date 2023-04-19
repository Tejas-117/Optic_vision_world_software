const SqlString = require("sqlstring");
const db = require("../config/db-config");
const { checkRequiredFields } = require("../utils/requiredFields");
const { transporter } = require("../config/mail-config");

// CREATE a bill
const addBill = async (req, res, next) => {
   const data = req.body;
   const { prescription_id: prescriptionId, customer_id: customerId } = req.query;

   if(!customerId) {
      return res.status(400).json({ message: "Invalid customer id" });
   }

   // check for missing fields in the data.
   const requiredFields = ['amount', 'cgst', 'sgst', 'discount', 'net_price', 'amount_paid', 'balance'];
   const missingFields = checkRequiredFields(requiredFields, data);

   if(missingFields.length > 0) {
      return res.status(400).json({
         message: `Missing fields: ${missingFields.join(",")}`
      })
   }

   let customer, billId = -1, queryRes;

   try {
      // retrienve the customer
      const a = await db.query(`SELECT * FROM customer WHERE customer_id = $1`, [customerId]);
      customer = a.rows[0];

      // create a new bill and get its billId
      const { rows } = await db.query(`
         INSERT INTO bill (prescription_id, customer_id, seller, amount, cgst, sgst, discount, net_price, amount_paid, balance, payment_method)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
         RETURNING bill_id
      `, 
      [prescriptionId, customerId, data.seller, data.amount, data.cgst, data.sgst, data.discount, data.net_price, data.amount_paid, data.balance, data.payment_method]);      
      billId = rows[0]['bill_id'];

      // save order items to database if items are purchased.
      const { orderItems } = data;

      if(orderItems?.length > 0) {
         const orderItemsList = [];
         orderItems.forEach(orderItem => {
            const eachOrderItemList = [];
   
            eachOrderItemList.push(billId);
            eachOrderItemList.push(orderItem.product_code);
            eachOrderItemList.push(orderItem.product_name);
            eachOrderItemList.push(orderItem.discount);
            eachOrderItemList.push(orderItem.quantity);
            eachOrderItemList.push(orderItem.cgst);
            eachOrderItemList.push(orderItem.sgst);
            eachOrderItemList.push(orderItem.sub_total);
   
            orderItemsList.push(eachOrderItemList);
         });
   
         const insertOrderItemsQuery = SqlString.format(`INSERT INTO order_item(bill_id, product_code, product_name, discount, quantity, cgst, sgst, sub_total) VALUES ? RETURNING product_code, quantity, sub_total`, [orderItemsList]);
         
         queryRes = await db.query(insertOrderItemsQuery);
      }
   } 
   catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });      
   }

   let message = "";
   
   // after a bill is successfully added, send a email to the customers email if it exists.
   if(customer.email) {
      const mailOptions = {
         from: process.env.EMAIL_USER,
         to: customer.email,
         subject: "Sample message title!!",
         text: "Sample message body AGAIN, testing!!",
      };

      try {
         const messageInfo = await transporter.sendMail(mailOptions);         
      } 
      catch (error) {
         message += err.message;
      }
   }

   return res.status(200).json({ 
      message: "Generated new bill.\t" + message, 
      data: {
         billId, order_items: queryRes?.rows
      } 
   });
}

// EDIT a bill
const editBill = async (req, res, next) => {
   const { billId } = req.params;

   return res.status(200).json({ message: "Generated new bill" });
}

module.exports = {
   addBill,
   editBill
}