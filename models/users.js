const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Favorites = require('./favorites');
const bcrypt = require('bcrypt');

const userSchema = new Schema ({
    email: String,
    password: String,
    // favoritePets: [FavoritePets.schema]
})

//Generates hash for user password
userSchema.methods.generateHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(8));

//returns boolean to indicate whether or not a user has provided correct info
userSchema.methods.validPassword = (password) => bcrypt.compareSync(password, this.password);

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
