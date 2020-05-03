const express = require('express');
const router = express.Router();
// Link to DB const Pets =

///PRESENTATIONAL ROUTES

//Index Route
router.get('/', (req, res) => {
    res.send('Index');
});

//New Route
router.get('/new', (req, res) => {
    res.send('New');
});

//Show Route
router.get('/:id', (req, res) => {
    res.send('Show');
});

//Edit Route
router.get('/:id/edit', (req, res) => {
    res.send('Edit')
})








module.exports = router;