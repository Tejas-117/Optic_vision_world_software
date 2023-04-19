const express = require("express");
const { addBill, unpaidBills } = require("../controllers/bill");
const { isLoggedIn } = require("../utils/auth");
const router = express.Router();

// ADD a bill to a customer 
router.post("/add", isLoggedIn, addBill);

// GET all unpaid bills
router.get("/balance", isLoggedIn, unpaidBills);

module.exports = router;