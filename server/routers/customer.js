const express = require('express');
const router = express.Router();

// controller methods
const { addCustomer, getCustomer } = require('../controllers/customer');

// ADD a new customer
router.post("/add", addCustomer);

// GET a customer info based on name, phone, email
router.get("/", getCustomer)

module.exports = router;