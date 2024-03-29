const express = require('express');
const router = express.Router();
const { isLoggedIn } = require("../utils/auth");

// controller methods
const { addCustomer, getAllCustomers, getCustomer, editCustomer, deleteCustomer, getCustomerHistory, getRecentPrescription } = require('../controllers/customer');

// ADD a new customer
router.post("/add", isLoggedIn, addCustomer);

// GET all customers
router.get("/", isLoggedIn, getAllCustomers);

// GET a customer info based on name, phone, email
router.get("/customer", isLoggedIn, getCustomer);

// EDIT a customer
router.put("/:customerId/edit", isLoggedIn, editCustomer);

// DELETE a customer
router.delete("/:customerId/delete", isLoggedIn, deleteCustomer);

// GET customer history
router.get("/:customerId/history", isLoggedIn, getCustomerHistory);

// GET recent prescription of the customer
router.get("/:customerId/prescription", isLoggedIn, getRecentPrescription);

module.exports = router;