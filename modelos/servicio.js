const mongoose = require('mongoose');

let servicioSchema = new mongoose.Schema({
    id: Number,
    codigoServicio: String,
    nombreServicio: String,
    costoServicio: String,

});
module.exports = mongoose.model('Servicio', servicioSchema);