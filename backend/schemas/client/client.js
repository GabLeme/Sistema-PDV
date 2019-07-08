const restful = require('node-restful');
const mongoose = restful.mongoose;

const clientSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    email: { type: String, required: true },
    telefoneCelular: { type: String, required: true },
    telefoneResidencial: { type: String, required: true },
})

module.exports = restful.model('Client', clientSchema);