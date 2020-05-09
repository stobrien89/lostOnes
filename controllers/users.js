const express = require('express');
const router = express.Router();
const passport = require('passport');


//Linking users DB
const Users = require('../models/users');
const Pets = require('../models/pets');


//Presentational Routes

///Registration Route
router.get('/register', (req, res) => {
    req.app.locals.loggedIn ? res.render('NewUser', {loggedIn: req.app.locals.loggedIn, message: req.flash('signupMessage')}) : res.render('NewUser', {message: req.flash('signupMessage')});
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

//Favorite pets route
router.get('/favorites', (req, res) => {
    if (req.app.locals.loggedIn) {
        Users.findOne({_id: req.session.passport.user}, (err, foundUser) => {
            res.render('FavoriteIndex', {favoritePets: foundUser.favoritePets, loggedIn: req.app.locals.loggedIn})
        })
    }else {
        res.redirect('/lostones/pets')
    }
})




//Functional Routes: 


router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/lostones',
    failureRedirect: '/lostones/login',
    
}))


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

//Remove pet from favorites
router.post('/favorites/:id', (req, res) => {
    Users.updateOne({_id: req.session.passport.user}, {$pull: {'favoritePets': {_id : req.body.id}}}, (err, update) => {
        err ? console.log(err) : res.redirect('/lostones/favorites');
    })
})

//Adds Pet to favorites
router.post('/pets/:id/favorite', (req, res) => {
    Users.findOne({_id: req.session.passport.user}, (err, foundUser) => {
        Pets.findOne({_id: req.params.id}, (err, foundPet) => {
            foundUser.favoritePets.push(foundPet)
            foundUser.save((err, info) => {
                if (err) {
                    console.log(err);
                }else {
                    req.flash('success', 'Added to favorites!')
                    res.redirect(`/lostones/pets/${req.params.id}`);
                }
            });
        })
    })
})



const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
        res.redirect('/lostones');
    }
}

module.exports = router;