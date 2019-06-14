const express = require ('express');
const app =  express();
require('dotenv').config()
const login = require('./routes/login/login')

//const loginRouter = require("./routes/auth/login");
//const sequilize =  require('./helpers/conf')


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());
//app.use('/conf', sequilise);
//app.use('/auth',loginRouter);

app.use('/auth', login )

const server = app.listen( process.env.PORT  ||  5000, function(){
    console.log('Listening on port '  +  server.address().port);
});
