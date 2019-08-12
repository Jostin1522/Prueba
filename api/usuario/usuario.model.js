var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, //String único aleatorio
  correo: String,
  libreria: String
});

module.exports = mongoose.model('Usuario', usuarioSchema,'Usuarios');
