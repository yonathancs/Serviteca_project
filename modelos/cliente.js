const mongoose = require('mongoose');

let clienteSchema = new mongoose.Schema({
    id: Number,
    identificacion: String,
    nombre: String,
    telefono: String,
    correo: String,

});
module.exports = mongoose.model('cliente', clienteSchema);