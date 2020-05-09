const express = require('express');
const Seed = require('../models/seed');
const router = express.Router();
const app = express();


// Link to DB const Pets 
const Pets = require('../models/pets');

//Seed data for pets: 
// Pets.create(Seed, (err, createdData) => {
//     err ? console.log(err) : console.log('added data');
// })


///PRESENTATIONAL ROUTES

//Landing page
router.get('/', (req, res) => {
    req.app.locals.loggedIn ? res.render('Home', {loggedIn: req.app.locals.loggedIn}) : res.render('Home');
})

//Pets Index Route
router.get('/pets', (req, res) => {
    Pets.find({}, (err, allPets) => {
        req.app.locals.loggedIn ? res.render('PetIndex', {loggedIn: req.app.locals.loggedIn, pets: allPets}) : res.render('PetIndex', {pets: allPets});
    })
});

//New Route
router.get('/pets/new', (req, res) => {
    req.app.locals.loggedIn ? res.render('NewPet', {loggedIn: req.app.locals.loggedIn}) : res.render('NewPet');
});

//Show Route
router.get('/pets/:id', (req, res) => {
    Pets.findById(req.params.id, (err, foundPet) => {
        req.app.locals.loggedIn ? res.render('PetShow', {loggedIn: req.app.locals.loggedIn, pet: foundPet, message: req.flash('success')}) : res.render('PetShow', {pet: foundPet});
    })
});

//Edit Route
router.get('/pets/:id/edit', (req, res) => {
    Pets.findById(req.params.id, (err, pet) => {
        req.app.locals.loggedIn ? res.render('PetEdit', {loggedIn: req.app.locals.loggedIn, pet}) : res.render('PetEdit', {pet});
    })
})


//FUNCTIONAL ROUTES:

///ADD NEW PET
router.post('/pets', (req, res) => {
    let {spayedOrNeutered, house_trained, special_needs, shots_current, children, dogs, cats} = req.body;
    spayedOrNeutered === 'yes' ? spayedOrNeutered = true : spayedOrNeutered = false;
    house_trained === 'yes' ? house_trained = true : house_trained = false;
    special_needs === 'yes' ? special_needs = true : special_needs = false;
    shots_current === 'yes' ? shots_current = true : shots_current = false;
    children === 'yes' ? children = true : children = false;
    dogs === 'yes' ? dogs = true : dogs = false;
    cats === 'yes' ? cats = true : cats = false;
    console.log(req.body);
    Pets.create(req.body, (err, createdPet) => {
        err ? console.log(err) : console.log(createdPet);
        res.redirect('/lostones/pets');
        
    })
})

///Update Pets Route
router.put('/pets/:id', (req, res) => {
    let {spayedOrNeutered, house_trained, special_needs, shots_current, children, dogs, cats} = req.body;
    spayedOrNeutered === 'yes' ? spayedOrNeutered = true : spayedOrNeutered = false;
    house_trained === 'yes' ? house_trained = true : house_trained = false;
    special_needs === 'yes' ? special_needs = true : special_needs = false;
    shots_current === 'yes' ? shots_current = true : shots_current = false;
    children === 'yes' ? children = true : children = false;
    dogs === 'yes' ? dogs = true : dogs = false;
    cats === 'yes' ? cats = true : cats = false;
    
    Pets.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPet) => {
        err ? console.log(err) : console.log(updatedPet);
        res.redirect(`/lostones/pets/${req.params.id}`)
    })
})

//Delete Pets Route
router.delete('/pets/:id', (req, res) => {
    Pets.findByIdAndRemove(req.params.id, (err, deletedPet) => {
        res.redirect('/lostones/pets')
    })

})







module.exports = router;