// function to check if the user is logged in
const isLoggedIn = (req, res, next) => {
   if(req.session.user) {
      next();
   } 
   else {
      return res.status(401).json({ message: "Unauthorised", user: null });
   }

}

module.exports = { isLoggedIn };