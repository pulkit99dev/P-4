const express = require('express');
const port = 9000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

let app = express();

// collecting form data
app.use(express.urlencoded());

app.use(expressLayouts);

//setting up views
app.set('view engine', 'ejs');
app.set('views', './views');

// setting up routes
app.use('/', require('./routes/index'));


app.listen(port, function(err){
    if(err){console.log('Error while  running')};
    console.log(`Server is up & running at port : ${port}`);
})