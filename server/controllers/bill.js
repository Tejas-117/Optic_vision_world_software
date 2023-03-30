const db = require("../config/db-config");

// create a bill
const addBill = async (req, res, next) => {
   const { prescription_id: prescriptionId, customer_id: customerId } = req.query;
   console.log(prescriptionId, customerId);

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