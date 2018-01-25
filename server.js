// Require the modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));
app.use(bodyParser.json()); 

// Angular app 
app.use(express.static(__dirname + '/quoteAng/dist' ));

// Require mongoose.js
require('./server/config/mongoose.js');

// Requiring routes.js
var route = require('./server/config/routes.js');
route(app);

app.listen(8000, function() {
    console.log('Listening to port 8000');
});