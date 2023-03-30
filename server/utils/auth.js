// function to check if the user is logged in
const isLoggedIn = (req, res, next) => {
   if(req.session.isLoggedIn) {
      return next();
   }

   return res.status(401).json({ message: "Unauthorised" });
}

module.exports = { isLoggedIn };