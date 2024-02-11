const express = require('express');
const URL = require('../Models/url')
const router = express.Router();

const {signinPage, signupPage} = require('../Controllers/user')

router.get('/',async (req,res)=>{
    // console.log(req.user);
    if(!req.user) return res.redirect("/signin");
    const allUrls = await URL.find({createdBy : req.user._id})
    res.render('home',{
        allUrls: allUrls
    })
})

router.get('/signup', signupPage);
router.get('/signin', signinPage);

module.exports = router;