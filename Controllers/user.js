const USER = require('../Models/user');
const { v4 : uuidv4 } = require('uuid');
const  {getUser, setUser} = require('../service/auth');

exports.handleUserSignup = async (req,res)=>{
    try {
        const {name,email,password } = req.body;
        if(!email || !password || !name)  res.render('signup', { errorMsg : "Please fill all fields"});
        else{
            const user = await USER.findOne({email: email})
            if(user) {
               return  res.render('signup',{
                    errorMsg : "User already exists"
                })
            }
            else{
            const response = await USER.create({name:name,email:email,password:password});
            return res.redirect('/')
           }
       }
    } catch (error) {
        res.json({
            'error': error
        })
    }
}

exports.handleUserSignin = async (req,res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password) res.render('signin', { errorMsg : "Please fill all fields"});
        else{
        const response = await USER.findOne({email: email , password: password});
        if(!response) res.render('signin', {errorMsg : "User not found"});
        else{
         const sessionId = uuidv4();
         await setUser(sessionId,response.email);
         res.cookie("uid", sessionId);
         res.redirect('/');
        }
        }
    } catch (error) {
        res.json({error : error.message});
    }
}

exports.signupPage = async (req,res)=>{
    res.render('signup');
}

exports.signinPage = async (req,res)=>{
    res.render('signin');
}