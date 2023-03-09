const express = require("express");
const router = express.Router();

// required controllers
const { addProduct, deleteProduct, editProduct, getAllproducts, getProduct } = require("../controllers/product");

// GET all products
router.get("/", getAllproducts);

// GET a product by its id
router.get("/:id", getProduct);

// ADD a product
router.post("/add", addProduct);

// EDIT a product
router.put("/:productId/edit", editProduct);

// DELETE a product
router.delete("/:productId/delete", deleteProduct);

module.exports = router;