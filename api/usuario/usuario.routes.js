var express = require('express');
var router = express.Router();
var usuarioApi = require('./usuario.api');


router.post('/datos', function(req, res) {
  usuarioApi.validarUsuario(req,res);
})

module.exports = router;
