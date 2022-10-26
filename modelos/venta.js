const mongoose = require('mongoose');

let ventaSchema = new mongoose.Schema({
    id: Number,
    codigoVenta: String,
    identificacion: String,
    placaCarro: String,
    fecha: String,
    valorServicio: String,

});
module.exports = mongoose.model('venta', ventaSchema);