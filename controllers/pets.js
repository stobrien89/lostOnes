const express = require('express');
const router = express.Router();
// Link to DB const Pets =

///PRESENTATIONAL ROUTES

//Index Route
router.get('/', (req, res) => {
    res.render('Index');
});

//New Route
router.get('/new', (req, res) => {
    res.render('New');
});

//Show Route
router.get('/:id', (req, res) => {
    res.render('Show');
});

//Edit Route
router.get('/:id/edit', (req, res) => {
    res.render('Edit')
})








module.exports = router;