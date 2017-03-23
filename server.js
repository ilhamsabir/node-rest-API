// Dependecy
var express    = require('express');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var Product    = require('./app/models/product');

// Mongo DB Connet
mongoose.connect('mongodb://localhost:27017/newsdata');

// express
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// routes
var routesProduct = require('./app/routes/api');
routesProduct(app);

// server
app.listen(9000, function(){
  console.log('connect in port 9000');
});
