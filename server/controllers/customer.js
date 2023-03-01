const db = require("../config/db-config");
const { checkRequiredFields } = require("../utils/requiredFields");

// ADD a new customer
const addCustomer = async (req, res, next) => {
   const data = req.body;

   const requiredFields = ['phone', 'entry_date'];
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

// GET a customer based on name, phone, email
const getCustomer = async (req, res, next) => {
   const { name, phone, email } = req.query;

   let responseData = {};

   try {
      const { rows } = await db.query(`
         SELECT * FROM customer WHERE name = $1 OR phone = $2 OR email = $3
      `, [name, phone, email]); 
      
      responseData = rows;
   } 
   catch (error) {
      console.log(error.message);
      return res.status(500).json({
         message: "Internal server error"
      })
   }

   return res.status(200).json({ 
      data: responseData[0],
      message: "Retrieved customer successfully."
   })
}

module.exports = {
   addCustomer,
   getCustomer
}