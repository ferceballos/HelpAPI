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

router.get('/', function(req, res, next) {
  res.send('Here are the tickets methods')
});

module.exports = router;