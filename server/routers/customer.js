const express = require('express');
const router = express.Router();
const { isLoggedIn } = require("../utils/auth");

// controller methods
const { addCustomer, getCustomer, editCustomer, deleteCustomer, getCustomers } = require('../controllers/customer');

// ADD a new customer
router.post("/add", isLoggedIn, addCustomer);

// GET all customers
router.get("/", isLoggedIn, getCustomers);

// GET a customer info based on name, phone, email
router.get("/customer", isLoggedIn, getCustomer);

// EDIT a customer
router.put("/:customerId/edit",isLoggedIn, editCustomer);

// DELETE a customer
router.delete("/:customerId/delete",isLoggedIn, deleteCustomer);

module.exports = router;