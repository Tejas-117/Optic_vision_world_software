const express = require("express");
const router = express.Router();

// required controllers
const { addPrescription } = require("../controllers/prescription");

// ADD a prescription to a customer
router.post("/:customerId/add", addPrescription);

module.exports = router;