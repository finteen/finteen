const express = require('express');
const loginRouter = express.Router()


loginRouter.get('/login', function(req,res){
    res.end()
});


module.exports = loginRouter;
