const Client = require('./client');


Client.methods(['get', 'post', 'put', 'delete']);

Client.updateOptions({ new: true, runValidators: true });

module.exports = Client;