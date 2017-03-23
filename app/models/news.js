// Dependecy
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var newsSchema = new mongoose.Schema({
    title : String,
    price : String,
    link : String,
    category : String,
    img : String,
    web : String
},{collection: 'kompasdata'});
// return
module.exports = restful.model('News', newsSchema);
