const express = require("express");
const router = express.Router();

// required controllers
const { addProduct, deleteProduct, editProduct, getAllproducts, getProduct } = require("../controllers/product");
const { isLoggedIn } = require("../utils/auth");

// GET all products
router.get("/", isLoggedIn, getAllproducts);

// GET a product by its id
router.get("/:id", isLoggedIn, getProduct);

// ADD a product
router.post("/add", isLoggedIn, addProduct);

// EDIT a product
router.put("/:productId/edit", isLoggedIn, editProduct);

// DELETE a product
router.delete("/:productId/delete", isLoggedIn, deleteProduct);

module.exports = router;