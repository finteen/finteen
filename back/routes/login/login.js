const express = require('express');
const userRouter = express.Router();
const   {kid}  = require('../../data-layer/models');

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

module.exports = userRouter;
