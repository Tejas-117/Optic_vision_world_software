require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const session = require("express-session");

// DB config
const db = require("./config/db-config");

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const sessionOption = {
   secret: process.env.SESSION_SECRET,
   resave: false,
   saveUninitialized: false,
   cookie: {
      httpOnly: true,
      secure: false, // true in production
      maxAge: 1000 * 60 * 60 * 24 // 1 day in milliseconds
   }
};
app.use(session(sessionOption));

// use all the routers
app.use("/customer", require("./routers/customer"));
app.use("/prescription", require("./routers/prescription"));
app.use("/products", require("./routers/product"));
app.use("/bill", require("./routers/bill"));
app.use("/admin", require("./routers/admin"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))