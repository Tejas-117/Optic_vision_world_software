const addPrescription = async (req, res, next) => {
   const { customerId } = req.params;
   
   

   return res.status(200).json({ message: "Prescription added" })
}

module.exports = {
   addPrescription
}