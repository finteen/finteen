const http = require('http');
const path = require('path');
const express = require ('express');
const app =  express();
/*const bodyParser = require('body-parser');*/
const getRoutes = require("./routes/get");


/*app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyPaser.json());
app.use(express.static(_dirname + '/public'));*/

app.use('/get',getRoutes);

app.use("/", (req,res)=>{
    res.send("ok");
});

app.use(function(req,res,next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

let  server  =  app.listen( process.env.PORT  ||  3000, function(){
    console.log('Listening on port '  +  server.address().port);
});
