const db = require("../config/db-config");
const { checkRequiredFields } = require("../utils/requiredFields");

// TODO: Add email and phone number validation

// ADD a new customer
const addCustomer = async (req, res, next) => {
   const data = req.body;

   const requiredFields = ['name', 'phone', 'entry_date'];
   const missingFields = checkRequiredFields(requiredFields, data);

   // if there are any fields missing from the data, return error
   if(missingFields.length > 0) {
      return res.status(400).json({
         message: `Missing fields: ${missingFields.join(",")}`
      })
   }
   
   try {
      await db.query(`
         INSERT INTO customer 
         (name, designation, address, phone, email, dob, entry_date)
         VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING customer_id
      `,
      [data.name, data.designation, data.address, data.phone, data.email, data.dob, data.entry_date]);
   } 
   catch (error) {
      console.log(error.message);
      return res.status(500).json({
         message: "Internal server error"
      })
   }

   return res.status(200).json({
      message: "Successfully added a customer"
   });
}

//GET all customers details
const getAllCustomers = async (req,res,next) =>{
   try{
      const {rows} = await db.query("SELECT * FROM customer");
      
      res.status(200).json({ 
         data: rows,
         message: "Retrieved all the customer successfully."
      })
   }
   catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Internal server error" });
   }
}

// GET a customer based on name, phone, email
const getCustomer = async (req, res, next) => {
   const { name, phone, email } = req.query;

   let queryRes = {};

   try {
      const { rows } = await db.query(`
         SELECT * FROM customer WHERE phone = $1 OR email = $2 OR name = $3
      `, [phone, email, name]); 

      queryRes = rows[0];
   } 
   catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: "Internal server error" });
   }

   // if the customer is not found, return error
   if(queryRes === undefined) {
      return res.status(404).json({ message: "Customer not found" });
   }

   return res.status(200).json({ 
      data: queryRes, message: "Retrieved customer successfully."
   })
}

// EDIT a customer info
const editCustomer = async (req, res, next) => {
   const { customerId } = req.params;
   const data = req.body;

   const requiredFields = ['name', 'phone', 'entry_date'];
   const missingFields = checkRequiredFields(requiredFields, data);

   // if there are any fields missing from the data, return error
   if(missingFields.length > 0) {
      return res.status(400).json({
         message: `Missing fields: ${missingFields.join(",")}`
      })
   }
   
   let queryRes = {};

   try {
      const { rows } = await db.query(`
         UPDATE customer 
         SET name = $1, designation = $2, address = $3, phone = $4, email = $5, dob = $6, entry_date = $7
         WHERE customer_id = $8 
         RETURNING customer_id, name, designation, address, phone, email, dob, entry_date
      `,
      [data.name, data.designation, data.address, data.phone, data.email, data.dob, data.entry_date, customerId]);

      queryRes = rows;
   } 
   catch (error) {
      console.log(error.message);
      return res.status(500).json({
         message: "Internal server error"
      })
   }

   return res.status(200).json({ 
      message: "Customer successfully edited.",
      data: queryRes[0] 
   });
}

// DELETE a customer based on customer_id
const deleteCustomer = async (req, res, next) => {
   const { customerId } = req.params;

   try {
      await db.query(`
         DELETE FROM customer WHERE customer_id = $1
      `, [customerId])
   } catch (error) {
      console.log(error.message);
      return res.status(500).json({
         message: "Internal server error"
      })
   }

   return res.status(200).json({ message: "Customer successfully deleted. "})
}

// GET customer history
const getCustomerHistory = async (req, res, next) => {
   const { customerId } = req.params;
   console.log(customerId);

   let queryRes = {};

   try {
      const { rows } = await db.query(
      `SELECT prescription, purchased_products, customer.* FROM customer
       JOIN 
         (SELECT json_agg(row_to_json(prescription)) AS prescription FROM (SELECT * FROM prescription WHERE customer_id = $1) AS prescription) AS all_prescription
         JOIN 
         (SELECT json_agg(row_to_json(product_info)) AS purchased_products FROM (SELECT * FROM order_item WHERE bill_id IN (SELECT bill_id FROM bill WHERE customer_id = $1)) AS product_info) AS all_products
         ON 1=1
       ON 1=1
       WHERE customer.customer_id = $1`
      , [customerId]);

      console.log(rows[0]);
      queryRes = rows[0];
   } 
   catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
   }

   return res.status(200).json({ message: "Successfully retrieved customer data", data: queryRes });
}

module.exports = {
   addCustomer,
   getAllCustomers,
   getCustomer,
   editCustomer,
   deleteCustomer,
   getCustomerHistory
}