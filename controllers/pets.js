const express = require('express');
const router = express.Router();

// Link to DB const Pets 
const Pets = require('../models/pets');

///PRESENTATIONAL ROUTES

//Landing page
router.get('/', (req, res) => {
    res.render('Home')
})

//Pets Index Route
router.get('/pets', (req, res) => {
    console.log(req.session);
    Pets.find({}, (err, allPets) => {
        err ? console.log(err) : null;
        res.render('PetIndex', {pets: allPets});
    })
});

//New Route
router.get('/pets/new', (req, res) => {
    res.render('NewPet');
});

//Show Route
router.get('/pets/:id', (req, res) => {
    Pets.findById(req.params.id, (err, foundPet) => {
        err ? console.log(err) : console.log(foundPet);
        res.render('PetShow', {pet: foundPet})
    })
});

//Edit Route
router.get('/pets/:id/edit', (req, res) => {
    Pets.findById(req.params.id, (err, pet) => {
        res.render('PetEdit', {pet})
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