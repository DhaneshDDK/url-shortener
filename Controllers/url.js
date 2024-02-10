const shortid = require("shortid");
const URL = require('../Models/url');

exports.handleGenerateNewShortUrl = async (req,res)=>{
    if(!req.body.url) {
        res.status(400).json({
            message  : "URL is required"
        })
    }

    const response1 = await URL.findOne({ redirectUrl :  req.body.url});

    if(response1) {
        return res.render('home',{
            shortURL : `https://url-shortener-uvqp.onrender.com/api/url/${response1.shortId}`
        })
    }

    else{
        const shortId = shortid()
        const response = await URL.create({
            shortId: shortId,
            redirectUrl : req.body.url
        })
    
        return res.render('home',{
            shortURL : `https://url-shortener-uvqp.onrender.com/api/url/${shortId}`
        })
    }

}

exports.handleRedirect = async (req,res)=>{
    const shortId = req.params.shortId;
    const response = await URL.findOneAndUpdate({
        shortId: shortId
    },
      {
        $push : {
            visitHistory : {
                timeStamp : Date.now()
            }
        }
      }
    );

    res.redirect(response.redirectUrl);

}


exports.handleAnalytics  = async (req,res)=>{
    try {
        // const shortId = req.params.shortId;
        const response = await URL.find({});
        console.log(response)
        res.render('home',{
            allUrls : response
        })

    } catch (error) {
        res.status(500).json({
            "message" : "Error",
            "Error: "  : error.message
        })
    }
}