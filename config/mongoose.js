const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learning');

let db = mongoose.connection;

db.on('err', console.error.bind('Error while connecting to db'));

db.once('open', function(){
    console.log('Connected to db');
});

module.exports = db;