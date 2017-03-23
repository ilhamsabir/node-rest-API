'use strict';

// get product from controller
var product = function(app) {
    var productList = require('../controllers/productController');
     // product Routes
     app.route('/api/product')
    		.get(productList.list_all_product);
};

module.exports = product;
