const express = require("express");
const { addBill } = require("../controllers/bill");
const router = express.Router();

// ADD a bill to a customer 
router.post("/add", addBill);

module.exports = router;