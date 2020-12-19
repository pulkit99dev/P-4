const express = require('express');
const port = 9000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const User = require('./models/user_schema');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport_local_strategy');
const { pass } = require('./config/mongoose');

const MongoStore = require('connect-mongo')(session);

let app = express();

// collecting form data
app.use(express.urlencoded());

app.use(expressLayouts);

app.use(express.static('./assets'));

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//setting up views
app.set('view engine', 'ejs');
app.set('views', './views');



//cookies
app.use(session({
    name: 'p-4',
    secret : 'something',
    saveUninitialized : false,
    resave : false,
    cookie: {
        maxAge: (1000*60*100)
    },
    store: new MongoStore(
        {
            mongooseConnection : db,
            autoRemove : 'disabled'
        },
        function(err){
            console.log(err || 'connected to mongodb');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

// setting up routes
app.use('/', require('./routes/index'));


app.listen(port, function(err){
    if(err){console.log('Error while  running')};
    console.log(`Server is up & running at port : ${port}`);
})