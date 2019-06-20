const express = require ('express');
const app =  express();
require('dotenv').config()
const login = require('./routes/login/login')
const bodyParser = require('body-parser');
const signupform = require('./routes/signupform/signupform')

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());
app.use('/auth', login )
app.use('/auth', signupform)

const server = app.listen( process.env.PORT  ||  5000, function(){
    console.log('Listening on port '  +  server.address().port);
});
