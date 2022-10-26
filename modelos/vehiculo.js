const mongoose = require('mongoose');

let vehiculoSchema = new mongoose.Schema({
    id: Number,
    placa: String,
    color: String,
    marca: String,
    modelo: String,
    anio: String,

});
module.exports = mongoose.model('vehiculo', vehiculoSchema);