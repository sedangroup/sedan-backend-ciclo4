const mongoose = require('mongoose');

const ColaboradorSchema =  new mongoose.Schema({
    nombres: String,
    apellidos: String,
    email: String,
    fullnames: String,
    telefono: String,
    rol: String,
    genero: String,
    n_doc: String,
    password: String,
    estado: Boolean,
    pais: String,
    updated: {type: Date, default: Date.now()}
});

const colaboradorModel = mongoose.model('colaborador',ColaboradorSchema);
module.exports = colaboradorModel;