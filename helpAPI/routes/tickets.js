var express = require('express');
var router = express.Router();
var mysqlModel = require('mysql-model');

//Módulo para conectarnos a la base de datos
var MyAppModel = mysqlModel.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'pi7',
  });
   
  var Ticket = MyAppModel.extend({
      tableName: "tickets",
  });
   
  ticket = new Ticket();

//Direcciones y metodos empiezan aqui

//Obtener​ ​un​ ​ticket
router.get('/getbyfolio/:folio', function(req, res, next) {
  var folio = req.params.folio;
  //Regresa todos los datos del ticket con el folio solicitado 
  ticket.query("SELECT * FROM tickets WHERE TI_Folio="+folio+";", function(err, rows){
    res.send(rows);
  })
});

//Obtener​ ​todos​ ​los​ ​tickets​ ​de​ ​un​ ​usuario
router.get('/getbyuser/:user', function(req, res, next) {
  var user = req.params.user;
  //Regresa todos los datos de todos los tickets que tenga un usuario 
  ticket.query("SELECT * FROM tickets WHERE TI_Usuario_Solicitante='"+user+"';", function(err, rows){
    res.send(rows);
  })
});

//Obtener​ ​todos​ ​los​ ​tickets​ ​asignados​ ​a​ ​un​ ​bibliotecario
router.get('/getbylibrarian/:user', function(req, res, next) {
  var user = req.params.user;
  //Regresa todo los datos del ticket que estan asignados a un bibliotecario 
  ticket.query("SELECT TI_Folio, TI_Fecha_Hora_Alta, TI_Peticion, TI_Fecha_Hora_Cierre, "+
  "TI_Calificacion, TI_Status, TI_Usuario_Solicitante FROM tickets, usuarios WHERE TI_Usuario_Solicitante='"+user+"' AND US_Rol=3;", function(err, rows){
    res.send(rows);
  })
});

//Obtener​ ​todos​ ​los​ ​tickets​ ​que​ ​no​ ​han​ ​sido​ ​cerrados
router.get('/getbyopened', function(req, res, next) {
    //Regresa todo los datos de los tickets que no tienen el status 3 que es cerrado 
    ticket.query("SELECT * FROM tickets WHERE TI_Status=1 OR TI_Status=2;",function(err, rows){
    })
  });

router.get('/', function(req, res, next) {
  res.send('Here are the tickets methods')
});

module.exports = router;