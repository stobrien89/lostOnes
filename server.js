//DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const port = 3000;

//DB DEPENDENCIES


//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));


//MONGOOSE CONNECTION
mongoose.connect('mongodb://localhost:27017/lostones', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// MONGOOSE ERROR/SUCCESS MESSAGES
// Products.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
// Products.on('connected', () => console.log('mongo connected: ', mongoURI));
// Products.on('disconnected', () => console.log('mongo disconnected'));

// Products.on( 'open' , ()=>{
//     console.log('Connection made!');
//   });


//CONTROLLER
const petsController = require('./controllers/pets.js')
app.use('/lostones', petsController);

//LISTENER
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
