const mongoose = require('mongoose');
const connectionString = require('./dbconnection.json');
module.exports = mongoose.connect(connectionString.dev, {
    useNewUrlParser: true
})