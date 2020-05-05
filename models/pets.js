const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema ({
    name: String,
    description: String,
    type: {type: String, enum: ['dog', 'cat']},
    photos: String,
    breeds: String,
    colors: String,
    age: Number,
    sex: String,
    size: {type: String, enum: ['small', 'medium', 'extra-medium', 'large', 'extra-large']},
    spayedOrNeutered: Boolean,
    house_trained: Boolean,
    special_needs: Boolean,
    shots_current: Boolean,
    children: Boolean,
    dogs: Boolean,
    cats: Boolean,
}, {timestamps: true});

const Pets = mongoose.model('Pets', petSchema);

module.exports = Pets;