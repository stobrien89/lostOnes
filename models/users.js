const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema ({
    email: String,
    password: String,
    favoritePets: {type: Array, unique: true}
})

//Generates hash for user password
userSchema.methods.generateHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(8));

//returns boolean to indicate whether or not a user has provided correct info--EDIT: HAD TO SCRAP THIS:
  ///Was not passing correct user password

// userSchema.methods.validPassword = (password) => bcrypt.compareSync(password, this.password);


const Users = mongoose.model('Users', userSchema);

module.exports = Users;
