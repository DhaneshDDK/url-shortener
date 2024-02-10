const mongoose = require('mongoose');

const url = process.env.MONGODB_URL ;

const dbConnect = ()=>{
    mongoose.connect(url)
    .then(()=>{
        console.log("Mongodb connection established");
    })
    .catch((e)=>{console.log("Error : ", e)});
}

module.exports = dbConnect;