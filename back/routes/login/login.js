/*Route pour le login entre la BDD et le loginpage */
const express = require('express');
const userRouter = express.Router();
const Kid = require('../../models/kid');

userRouter.post('/login', function (req, res) {
    Kid.findOne({
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
