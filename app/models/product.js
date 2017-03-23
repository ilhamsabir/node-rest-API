'use strict';
// Dependecy
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var productSchema = new Schema({
    title : String,
    price : String,
    link : String,
    category : String,
    img : String,
    web : String
},{collection: 'product'});

// return
module.exports = mongoose.model('Products', productSchema);
