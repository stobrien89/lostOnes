const express = require('express');
const router = express.Router();

//Linking users DB
const Users = require('../models/users')


//Presentational Routes
router.get('/register', (req, res) => {
    res.render('NewUser');
})

router.get('/login', (req, res) => {
    res.render('UserLogin');
})



//Functional Routes: 
router.post('/register', (req, res) => {
    Users.create(req.body, (err, user) => {
        err ? console.log(err) : console.log('user added')
        res.redirect('/lostones')
    })
})

router.post('/login', (req, res) => {
    Users.findOne({email: req.body.email}, (err, foundUser) => {
        foundUser ? req.body.password === foundUser.password ? res.redirect('/lostones') : alert('Incorrect Password') : alert('no user found')
    })
})

module.exports = router;