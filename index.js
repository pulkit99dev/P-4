const express = require('express');
const port = 9000;
const layouts = require('express-ejs-layouts');

let app = express();

// collecting form data
app.use(express.urlencoded());

//setting up views
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    console.log(`Server is up & running at port : ${port}`);
})