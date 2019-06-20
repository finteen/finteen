const express = require('express');
const userRouter = express.Router();
const Kids = require('../../models/kid');

userRouter.post('/signupform', function (req, res) {
    Kids.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(user=>{
        if(!user){
            Kids.create({
                    name: req.body.name,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    mobile: req.body.mobile,
                    age: req.body.age,
                    genre: req.body.genre,
                    pseudonyme: req.body.pseudonyme,
                    password: req.body.password,
                    //checkpassword: req.body.checkpassword,
                    iban: req.body.iban,
                    bic: req.body.bic,
        
        
                }).then(user =>
                    res.sendStatus(200
                        ))
                        .catch(err=>{
                            res.send('error:' + err)
                        })
            } else {
                res.sendStatus(500)


            }
        
    }).catch(err=>{
        res.send('error: ' + err)
    })
   
    })



module.exports = userRouter;
