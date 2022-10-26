const mongoose = require('mongoose');

let administradorSchema = new mongoose.Schema({
    id: Number,
    identificacion: String,
    nombres: String,
    apellidos: String,
    correo: String,
    telefono: String,
    clave: String,

});
module.exports = mongoose.model('Administrador', administradorSchema);