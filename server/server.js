require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');

// DB config
const db = require("./config/db-config");

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// use all the routers
app.use("/customer", require("./routers/customer"));
app.use("/prescription", require("./routers/prescription"));
app.use("/products", require("./routers/product"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))