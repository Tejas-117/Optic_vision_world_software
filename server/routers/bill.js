const express = require("express");
const { addBill } = require("../controllers/bill");
const { isLoggedIn } = require("../utils/auth");
const router = express.Router();

// ADD a bill to a customer 
router.post("/add", isLoggedIn, addBill);

module.exports = router;