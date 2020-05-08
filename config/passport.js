const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/users');
const bcrypt = require('bcrypt');


//Creates unique session out of user id
passport.serializeUser((user, done) => {
    done(null, user.id)
})

//Reads cookie on next requests, decodes into user object (so you know they're still authorized)
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
})

//LOCAL SIGN UP:
    //Middleware for passport which is run before account creation
    //first argument sets names of keys
    //second argument creates the account if email is not already taken
passport.use('local-signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password', 
    passReqToCallback: true
    }, 
(req, email, password, done) => {
    User.findOne({email: email}, (err, user) => {
        if(err) return done(err)
        if(user) return done(null, false, req.flash('signupMessage', 'Email is already taken. Please try again'))
        const newUser = new User()

        newUser.email = email
        newUser.password = newUser.generateHash(password)
        newUser.save((err) => {
            if(err) throw err
            return done(null, newUser, null)
        })
    })
}))

//LOCAL SIGN IN
passport.use('local-login', new localStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true
}, (req, email, password, done) => {
	User.findOne({email: email}, (err, user) => {
		if(err) return done(err)
		if(!user) return done(null, false, req.flash('loginMessage', 'No user found...'))
		if(!bcrypt.compareSync(password, user.password)) return done(null, false, req.flash('loginMessage', 'Wrong Password.'))
		return done(null, user)
	})
}))

module.exports = passport;