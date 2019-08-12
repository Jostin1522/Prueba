var Sucursal = require('./sucursal.model');
var mongoose = require('mongoose');


module.exports.registrarSucursal = function(req, res) {
  var nombreSucursal = req.body.nombreSucursal;
  var numeroSucursal = req.body.telefono;
  var latitud = req.body.latitud;
  var longitud = req.body.longitud;
  var direccion = req.body.direccion;
  var provincia = req.body.provincia;
  var canton = req.body.canton;
  var distrito = req.body.distrito;
  var libreria = req.body.nombreLibreria;

  Sucursal.find({nombreSucursal: nombreSucursal}).exec()
  .then(
    function(result){
      console.log(result);
      if(result.length == 0){
        var nuevaSucursal = new Sucursal({
          _id: new mongoose.Types.ObjectId(),
          nombreSucursal: nombreSucursal,
          telefono: numeroSucursal,
          latitud: latitud,
          longitud: longitud,
          direccion: direccion,
          provincia: provincia,
          canton: canton,
          distrito: distrito,
          nombreLibreria: libreria,
          fechaRegistro: new Date()
        });

        nuevaSucursal.save()
        .then(
          function(result){
            res.json({result: "exito"});
            console.log(result);
          }
        )
        .catch(
          function(err){
            console.log(err);
          }
        );
      } else {
        res.json({result: "repetido"});
      }
    }
  )
  .catch(
    function(err){
      console.log(err);
    }
  );


}
