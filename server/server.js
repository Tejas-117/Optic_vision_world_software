require("dotenv").config();
const express = require('express');
const app = express();

// DB config
const db = require("./config/db-config");

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))