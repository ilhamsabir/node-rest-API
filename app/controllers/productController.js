'use strict';
// Dependecy
var mongoose = require('mongoose');
var Product = mongoose.model('Products');

// export return data
exports.list_all_product = function(req, res) {
  Product.find({}, function(err, data) {
    if (err) {
        res.send(err);
      }
      // res.json(data);
      res.json({
          'data': data,
          'message': 'success',
          'error': 0,
        });
  });
};
