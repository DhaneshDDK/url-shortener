const mongoose = require('mongoose');

const url = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/urlShortener';

const dbConnect = ()=>{
    mongoose.connect(url)
    .then(()=>{
        console.log("Mongodb connection established");
    })
    .catch((e)=>{console.log("Error : ", e)});
}

module.exports = dbConnect;