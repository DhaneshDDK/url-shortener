const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const {restrictToLoggedInUsersOnly, checkAuth} = require('./middlewares/auth')
const urlRoute = require('./Routes/url');
const staticRoute = require('./Routes/staticRoute');
const userRoute = require('./Routes/user');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"))

//routing
app.use("/url", restrictToLoggedInUsersOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);


//Mongodb connection
const dbConnect = require('./Database/mongodb');
dbConnect();

//starting the server
const port = process.env.PORT || 2000;
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})

const {handleRedirect} = require('./Controllers/url');
app.get('/url/:shortId', handleRedirect);