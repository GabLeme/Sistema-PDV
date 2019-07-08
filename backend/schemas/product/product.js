const restful = require('node-restful');
const mongoose = restful.mongoose;

const productSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    valor: { type: Number, required: true },
    quantidade: { type: Number, required: true },
    codigo: { type: String, required: true }
})

module.exports = restful.model('Product', productSchema);