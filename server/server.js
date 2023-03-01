require("dotenv").config();
const express = require('express');
const app = express();

// DB config
const db = require("./config/db-config");

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use all the routers
app.use("/customer", require("./routers/customer"));
app.use("/prescription", require("./routers/prescription"));
app.use("/product", require("./routers/product"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))