var express = require('express');
var router = express.Router();
var sucursalApi = require('./sucursal.api');


router.post('/add', function(req, res) {
  sucursalApi.registrarSucursal(req,res);
})

module.exports = router;
