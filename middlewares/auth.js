const {getUser} = require('../service/auth')

exports.restrictToLoggedInUsersOnly = (req,res,next)=>{
   const userId = req.cookies?.uid;
   if(!userId) return res.redirect('/signin');
   const user = getUser(userId);
   if(!user) return res.redirect('/signin');
   req.user = user;
   next();
}

exports.checkAuth = (req,res,next)=>{
   const userId = req.cookies?.uid;
   const user = getUser(userId);
   req.user = user;
   next();
}