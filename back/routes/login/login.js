const express = require('express');
const userRouter = express.Router();
const Kid = require('../../models/kid');

userRouter.post('/login', function(req,res){
    Kid.findOne({
        where:{
            email: req.body.email
    }
})
    .then(data => {
            if (req.body.password === data.dataValues.password){
                res.sendStatus(200)   
            }else{
                res.status(500).send("Error")
            }
        })
});

module.exports = userRouter;
