const express = require('express');
const router = express.Router()
const connection = require ('../conf')


router.get('/logInForm/index', function(req,res){
    connection.query('')
    res.send()
});


module.exports = router;
