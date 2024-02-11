const {getUser} = require('../service/auth')

exports.restrictToLoggedInUsersOnly = async (req,res,next)=>{
   const userId = req.cookies?.uid;
   if(!userId) return res.redirect('/signin');
   const user = await getUser(userId);
   if(!user) return res.redirect('/signin');
   req.user = user;
   next();
}
