const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema ({
    name: String,
    description: String,
    type: String,
    photos: String,
    breeds: [{primary: String, secondary: String, mixed: Boolean, unknown: Boolean}],
    colors: String,
    age: String,
    sex: {type: String, enum: ['Male', 'Female', 'Prefer not to say']},
    size: {type: String, enum: ['Small (5-30lbs)', 'Medium (31-55lbs', 'Large (56-75lbs)', ('XL (76-150lbs)')]},
    attributes : [{'spayed or neutered': Boolean, house_trained: Boolean, special_needs: Boolean, shots_current: Boolean }],
    environment: [{children: Boolean, dogs: Boolean, cats: Boolean}],
    tags: {type: String, enum: ['Cute', 'Intelligent', 'Playful', 'Affectionate']}
}, {timestamps: true});

const Pets = mongoose.model('Pets', petSchema);

module.exports = Pets;