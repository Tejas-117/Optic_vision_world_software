const db = require("../config/db-config");
const { checkRequiredFields } = require("../utils/requiredFields");

// create a bill
const addBill = async (req, res, next) => {
   const data = req.body;
   const { prescription_id: prescriptionId, customer_id: customerId } = req.query;

   // if the customer_id is NULL
   if(!customerId) {
      return res.status(400).json({ message: "Invalid customer id" });
      // OR get customer_id using prescription_id
   }

   // check for missing fields in the data.
   const requiredFields = ['amount', 'cgst', 'sgst', 'discount', 'net_price', 'amount_paid', 'balance'];
   const missingFields = checkRequiredFields(requiredFields, data);

   if(missingFields.length > 0) {
      return res.status(400).json({
         message: `Missing fields: ${missingFields.join(",")}`
      })
   }

   let billId = -1;
   try {
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
      console.table({ orderItems });
   } 
   catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });      
   }

   // after a bill is successfully added, send a email to the customers email if it exists.

   return res.status(200).json({ message: "Generated new bill" });
}

// edit a bill
const editBill = async (req, res, next) => {
   const { prescriptionId } = req.params;

   return res.status(200).json({ message: "Generated new bill" });
}

module.exports = {
   addBill,
   editBill,
}