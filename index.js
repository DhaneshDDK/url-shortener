const express = require('express');
const path = require('path');
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false }));

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"))

//routing
const router = require('./Routes/url')
app.use('/api/url', router );
const staticRoute = require('./Routes/staticRoute');
app.use('/', staticRoute);

//Mongodb connection
const dbConnect = require('./Database/mongodb');
dbConnect();

//starting the server
const port = process.env.PORT || 2000;
app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})

