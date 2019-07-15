const express = require('express');
const { kid } = require('../../data-layer/models/index');

const userRouter = express.Router();


userRouter.post('/login', function (req, res) {
    console.log(kid.kid)

    kid.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(data => {
            if (data) {
                if (req.body.password === data.dataValues.password) {
                    return res.sendStatus(200)
                } else {
                    return res.status(500).send("Error")
                }
            }
            res.status(500).send("Error")
        })
});

userRouter.post('/signupform', function (req, res) {
    kid.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(user=>{
        if(!user){
            kid.create({
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
userRouter.get ('/profile/:id',function(req,res) {
    kid.findOne({
        where:{
            id:req.params.id
        }
    })
    .then( user =>{
        if(user){
            console.log(user)
            res.json(user)
        } else{
            res.send('error')
        }
        
    })


.catch(error=>{
    res.send('error:' + error)
})
})
module.exports = userRouter;
