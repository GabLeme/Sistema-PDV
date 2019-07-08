const Product = require('./product');


Product.methods(['get', 'post', 'put', 'delete']);

Product.updateOptions({ new: true, runValidators: true });

module.exports = Product;