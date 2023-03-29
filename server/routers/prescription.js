const express = require("express");
const router = express.Router();

// required controllers
const { addPrescription, editPrescription, deletePrescription } = require("../controllers/prescription");

// ADD a prescription to a customer
router.post("/:customerId/add", addPrescription);

// EDIT a existing prescription
router.put("/:prescriptionId/edit", editPrescription);

// DELETE a prescription
router.delete("/:prescriptionId/delete", deletePrescription);

module.exports = router;