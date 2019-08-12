var express = require('express');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Jostin:Proyecto1@cluster0-dn6h0.mongodb.net/Biblioteca?retryWrites=true&w=majority',{useNewUrlParser: true});

// Permite el uso de JSON como parámetros del POST
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080, function() {
  console.log('Servidor corriendo en puerto 8080...')
});

app.use('/sucursal', require('./api/sucursal/sucursal.routes'));
app.use('/usuario', require('./api/usuario/usuario.routes'));
app.use('/bitacora', require('./api/bitacora/bitacora.route'));


module.exports = app;
