require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);

// DB config
const db = require("./config/db-config");

// Middleware 
app.set("trust-proxy", 1);
app.use(cors({
   origin : "http://localhost:3000",
   credentials: true,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionOption = {
   store: new pgSession({
      pool: db.pool,
      tableName: "admin_session"
   }),
   secret: process.env.SESSION_SECRET,
   resave: false,
   saveUninitialized: false,
   cookie: {
      httpOnly: true,
      secure: false, // true in production
      maxAge: 1000 * 60 * 60 * 24 // 1 day in milliseconds
      // maxAge: 1000 * 10
   }
};
app.use(session(sessionOption));

// use all the routers
app.use("/customers", require("./routers/customer"));
app.use("/prescriptions", require("./routers/prescription"));
app.use("/products", require("./routers/product"));
app.use("/bills", require("./routers/bill"));
app.use("/admin", require("./routers/admin"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))