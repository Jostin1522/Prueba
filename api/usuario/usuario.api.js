var Usuario = require('./usuario.model');

var mongoose = require('mongoose');

module.exports.validarUsuario = function(req, res) {
  var correo = req.body.correo;

  Usuario.findOne({correo: correo}).exec()
  .then(
    function(result){
      console.log(result);
      res.json(result);
    }
  )
  .catch(
    function(err){
      console.log(err);
    }
  );
}
