const express = require('express');
const router = express.Router();
//const { isLoggedIn } = require("../utils/auth");

// controller methods
const { addCustomer, getAllCustomers, getCustomer, editCustomer, deleteCustomer } = require('../controllers/customer');

// ADD a new customer
router.post("/add", addCustomer);

// GET all customers
router.get("/", getAllCustomers);

// GET a customer info based on name, phone, email
router.get("/customer",  getCustomer);

// EDIT a customer
router.put("/:customerId/edit", editCustomer);

// DELETE a customer
router.delete("/:customerId/delete", deleteCustomer);

module.exports = router;