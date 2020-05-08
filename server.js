//DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const MongoDBStore = require('connect-mongodb-session')(session);
const passport = require('passport');

//Passport configuration:
passportConfig = require('./config/passport.js');

//Environment/port
const port = process.env.PORT || 3000;
mongoConnectionString = process.env.MONGODB_URL || 'mongodb://localhost/passport-authentication'


//DB DEPENDENCIES


//MONGOOSE CONNECTION
mongoose.connect('mongodb://localhost:27017/lostones', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

mongoose.connect(mongoConnectionString, (err) => {
    console.log(err || "Connected to MongoDB (passport-authentication)")
})

//Stores session information as a 'sessions' collection in Mongo
const store = new MongoDBStore ({
    uri: mongoConnectionString,
    collection: 'sessions'
});

//MIDDLEWARE
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(flash());
app.use(session({
    secret: `Shhh it's a secret`, 
    cookie: {maxAge: 600000}, 
    resave: true,
    saveUninitialized: false,
    store: store
}))
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    app.locals.currentUser = req.user
    app.locals.loggedIn = !!req.user

    next();
})
app.use(express.static('public'));
// app.use(express.urlencoded({extended: false}))
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));




// MONGOOSE ERROR/SUCCESS MESSAGES
// Products.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
// Products.on('connected', () => console.log('mongo connected: ', mongoURI));
// Products.on('disconnected', () => console.log('mongo disconnected'));

// Products.on( 'open' , ()=>{
//     console.log('Connection made!');
//   });


//CONTROLLERS
const petsController = require('./controllers/pets.js')
app.use('/lostones', petsController);

const UserController = require('./controllers/users.js')
app.use('/lostones', UserController);

//LISTENER
app.listen(port, (err) => {
    console.log(err || "Listening on port 3000");
});

