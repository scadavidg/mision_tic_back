const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSaleDetailSchema = Schema({
    id: {
        type: String,
        require: true
    },
    valor: {
        type: Number,
        require: true,
    },
    cantidad: {
        type: Number,
        require: true,
    }
})

const SaleSchema = Schema({
    valor: {
        type: Number,
        require: true,
    },
    nombreCliente: {
        type: String,
        require: true
    },
    idCliente: {
        type: String,
        require: true
    },
    idVendedor: {
        type: String,
        require: true
    },
    productos: [ProductSaleDetailSchema],
    fecha: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('sales', SaleSchema);