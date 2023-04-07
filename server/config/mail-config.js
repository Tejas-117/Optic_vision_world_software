const nodemailer = require("nodemailer");

// account credentials
const creds = {
   user: process.env.EMAIL_USER,
   pass: process.env.EMAIL_PASS,
}

// create a transporter object 
let transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 587,
   secure: false, 
   auth: creds,
});

// verify the connection
transporter.verify()
   .then(isVerified => console.log("Mail server ready to send messages"))
   .catch(err => console.log("Can't send emails"))

module.exports = { transporter }