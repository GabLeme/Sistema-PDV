const Sale = require('./sale');


Sale.methods(['get', 'post', 'put', 'delete']);

Sale.updateOptions({ new: true, runValidators: true });

module.exports = Sale;