const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Favorites = require('./favorites');

const userSchema = new Schema ({
    email: String,
    password: String,
    // favoritePets: [FavoritePets.schema]
})

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
