
const path = require('path');
require('dotenv').config();
const express = require ('express');
const app =  express();
const login = require('./routes/login/login')

const bodyParser = require('body-parser');
const PATH_TO_WEB_APP_BUILD = 'web-app/build';
app.use(express.static(path.join(__dirname, PATH_TO_WEB_APP_BUILD)));
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.use('/auth', login )
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, PATH_TO_WEB_APP_BUILD, 'index.html'));
 });

const server = app.listen( process.env.PORT  ||  5000, function(){
    console.log('Listening on port '  +  server.address().port);
});
