const express = require("express");
const router = express.Router();

// required controllers
const { addProduct, deleteProduct, editProduct, getAllproducts } = require("../controllers/product");

// GET all products
router.get("/", getAllproducts);

// ADD a product
router.post("/add", addProduct);

// EDIT a product
router.put("/:productId/edit", editProduct);

// DELETE a product
router.delete("/:productId/delete", deleteProduct);

module.exports = router;