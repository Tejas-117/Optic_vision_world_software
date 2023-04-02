const express = require("express");
const { login, register, logout, authenticate } = require("../controllers/admin");
const { isLoggedIn } = require("../utils/auth");
const router = express.Router();


// Register a user
router.post("/register", register);

// Login a user with credentials
router.post("/login", login);

// Authenticate a user.
router.get("/authenticate", isLoggedIn, authenticate);

// Logout a user
router.get("/logout", logout);

module.exports = router;