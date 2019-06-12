const express = require ('express');
const app =  express();
require('dotenv').config()

const loginRouter = require("./routes/auth/login");


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());


app.use('/get',loginRouter);

const server = app.listen( process.env.PORT  ||  5000, function(){
    console.log('Listening on port '  +  server.address().port);
});
