const express = require('express');
const userRouter = express.Router()


userRouter.get('/user', function(req,res){
    res.end()
});


module.exports = userRouter;
