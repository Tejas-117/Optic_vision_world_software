const express = require("express");
const router = express.Router();

// required controllers
const { addProduct } = require("../controllers/product");

// ADD a product
router.post("/add", addProduct)

module.exports = router;