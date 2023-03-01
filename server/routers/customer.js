const express = require('express');
const router = express.Router();

// controller methods
const { addCustomer, getCustomer, editCustomer, deleteCustomer } = require('../controllers/customer');

// ADD a new customer
router.post("/add", addCustomer);

// GET a customer info based on name, phone, email
router.get("/", getCustomer);

// EDIT a customer
router.put("/:customerId/edit", editCustomer);

// DELETE a customer
router.delete("/:customerId/delete", deleteCustomer);

module.exports = router;