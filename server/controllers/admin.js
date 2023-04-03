const db = require('../config/db-config');
const { getHashPassword, checkHashPassword } = require("../utils/password");

// login users based on their credentials
const login = async (req, res, next) => {
   const { name, password } = req.body;

   // check if the user is present in the database.
   let userId = -1;
   try {
      const { rows } = await db.query(`
         SELECT * FROM admin WHERE name = $1
      `, [name]);

      // if a admin with current credentials do not exist, or the password doesn't match return error
      const validPassword = (rows.length) ?  await checkHashPassword(password, rows[0].password) : false ;
      if(rows.length === 0 || !validPassword) {
         return res.status(403).json({ message: "Incorrect username or password." });
      }

      userId = rows[0].admin_id
   } 
   catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
   }

   // set isLoggedIn to true in session
   req.session.user = { id: userId, name };

   return res.status(200).json({ message: "Successfully logged in", user: { id: userId, name } });
}

// logout the user
const logout = async (req, res, next) => {
   req.session.user = null;
   return res.status(200).json({ message: "Successfully logged out" });
}

// register users
const register = async (req, res, next) => {
   const { name, password } = req.body;

   let registeredUser = {};

   try {
      // check if the admin already exists
      const a = await db.query(`SELECT * FROM admin WHERE name = $1`, [name]);
      
      if(a.rows.length) {
         return res.status(403).json({ message: "Admin already exists" });
      }

      // if admin doesn't exist, save the info
      const hashedPassword = await getHashPassword(password);
      const { rows: [savedUser] } = await db.query(`
         INSERT INTO admin (name, password)
         VALUES ($1, $2) 
         RETURNING admin_id, name, password
      `, [name, hashedPassword]);


      // login the user
      req.session.user = { id: savedUser.admin_id, name: savedUser.name };
   } 
   catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error", user: registeredUser });
   }

   return res.status(200).json({ message: "User registered successfully" });
}

// authenticate a user
const authenticate = async (req, res, next) => {
   return res.status(200).json({ message: "User authorised", user: req.session.user });
}

module.exports = {
   login, logout, register, authenticate
}