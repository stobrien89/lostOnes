const express = require('express');
const router = express.Router();
const passport = require('passport');


//Linking users DB
const Users = require('../models/users')


//Presentational Routes

///Registration Route
router.get('/register', (req, res) => {
    res.render('NewUser', {message: req.flash('signupMessage')});
})

//Login route
router.get('/login', (req, res) => {
    res.render('UserLogin', {message: req.flash('loginMessage')});
})

//Logout route
router.get('/logout' , (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/lostones')
})



//Functional Routes: 


router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/lostones',
    failureRedirect: '/lostones/login'
}))

// router.post('/register', (req, res) => {
//     Users.find({$or: [{email: req.body.email}]}, (err, foundUsers) => {
//         if (foundUsers.some((item) => item.email === req.body.email)) {
//             res.render('NewUser', {errorMessage: 'User already exists. Please try again'});
//         }else {
//             Users.create(req.body, (err, user) => {
//                 err ? console.log(err) : console.log('user added');
//                 req.session.username = req.body.emails;
//                 req.session.logged = true;
//                 res.redirect('/lostones')
//             })
//         }
//     })
    
// })

router.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/lostones',
    failureRedirect: '/lostones/register'
}))

// router.post('/login', (req, res) => {
//     Users.findOne({email: req.body.email}, (err, foundUser) => {
//         if (foundUser && foundUser.password === req.body.password) {
//             req.session.username = req.body.email;
//             req.session.logged = true, 
//             req.session.message = 'up and running';
//             res.redirect('/lostones')
//         }else {
//             res.render('UserLogin', {errorMessage: 'Incorrect Email or Password'})
//         }

//     })
// })

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
        res.redirect('/lostones');
    }
}

module.exports = router;