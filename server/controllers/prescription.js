const db = require("../config/db-config");
const { checkRequiredFields } = require("../utils/requiredFields");

// add a prescription to given customer based on their id
const addPrescription = async (req, res, next) => {
   const data = req.body;
   const { customerId } = req.params;
   
   try {
      // retrieve the customer from the given id and verify if it is valid
      const customer = await db.query(`SELECT * FROM customer WHERE customer_id = ${customerId}`, []);
      
      if(customer.rowCount === 0) {
         return res.status(400).json({ message: "Customer not found" });
      }

      await db.query(`
         INSERT INTO prescription 
         (customer_id, lsph, lcyl, laxis, rsph, rcyl, raxis, va, pd, addition, remarks)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
      `,
      [customerId, data.lsph, data.lcyl, data.laxis, data.rsph, data.rcyl, data.raxis, data.va, data.pd, data.addition, data.remarks]);
   } 
   catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
   }

   return res.status(200).json({ message: "Prescription added" })
}

// edit a current prescription of a given customer
const editPrescription = async (req, res, next) => {
   const data = req.body;
   const { prescriptionId } = req.params;

   const requiredFields = ['eye'];
   const missingFields = checkRequiredFields(requiredFields, data);

   if(missingFields.length > 0) {
      return res.status(400).json({
         message: `Missing fields: ${missingFields.join(",")}`
      })
   }

   try {
      await db.query(`
         UPDATE prescription
         SET eye = $1, sph = $2, cyl = $3, axis = $4, va = $5, pd = $6, addition = $7, remarks = $8, test_date = $9
         WHERE prescription_id = $10
      `, 
      [data.eye, data.sph, data.cyl, data.axis, data.va, data.pd, data.addition, data.remarks, data.test_date, prescriptionId]);   
   } 
   catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Internal Server Error" });
   }

   return res.status(200).json({ message: "Prescription edited" });
}

// delete a prescription using its id
const deletePrescription = async (req, res, next) => {
   const { prescriptionId } = req.params;

   try {
      await db.query(`DELETE FROM prescription WHERE prescription_id = $1`, [prescriptionId]);
   } 
   catch (error) {
      return res.status(400).json({ message: "Internal Server Error" });
   }

   return res.status(200).json({ message: "Prescription deleted" });
}

module.exports = {
   addPrescription,
   editPrescription,
   deletePrescription
}