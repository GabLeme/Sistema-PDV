const restful = require('node-restful');
const mongoose = restful.mongoose;

const saleSchema = new mongoose.Schema({
    idCliente: { type: String, required: true },
    produtoVenda: { type: Array, required: true },
    valorTotal: { type: Number, required: true },
    valorDesconto: { type: Number, required: true },
    dataVenda: { type: String, required: true }
})

module.exports = restful.model('Sale', saleSchema);

