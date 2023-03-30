const express = require("express");
const { login, register, logout } = require("../controllers/admin");
const { isLoggedIn } = require("../utils/auth");
const router = express.Router();


// Register a user
router.post("/register", register);

// Login a user with credentials
router.post("/login", login);

// Logout a user
router.get("/logout", logout);

module.exports = router;