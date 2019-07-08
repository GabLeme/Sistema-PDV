const restful = require('node-restful');
const mongoose = restful.mongoose;

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    usuario: { type: String, required: true },
    senha: { type: String, required: true },
    roleAcesso: { type: String, required: true },
    dataCriacao: { type: String, required: true }
})

module.exports = restful.model('User', userSchema);

