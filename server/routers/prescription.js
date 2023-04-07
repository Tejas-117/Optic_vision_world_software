const express = require("express");
const router = express.Router();

// required controllers
const { addPrescription, editPrescription, deletePrescription } = require("../controllers/prescription");
const { isLoggedIn } = require("../utils/auth");

// ADD a prescription to a customer
router.post("/:customerId/add", isLoggedIn, addPrescription);

// EDIT a existing prescription
router.put("/:prescriptionId/edit", isLoggedIn, editPrescription);

// DELETE a prescription
router.delete("/:prescriptionId/delete", isLoggedIn, deletePrescription);

module.exports = router;