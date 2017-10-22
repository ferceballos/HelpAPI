var express = require('express');
var router = express.Router();
var mysqlModel = require('mysql-model');

//Módulo para conectarnos a la base de datos
var MyAppModel = mysqlModel.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'pi-7mo',
  });
   
  var User = MyAppModel.extend({
      tableName: "usuarios",
  });
   
  user = new User();

//Comprobar si un usuario se encuentra en la base de datos
router.get('/login/:mail/:pwd', function(req, res, next) {
  var mail = req.params.mail;
  var pwd = req.params.pwd;

  //Aqui es donde estoy haciendo las pruebas a ver si agarro algo
  var usuario = user.find('all',{where: "US_Correo = "+mail});
  console.log(usuario);

  //user.find('all', {where: "US_Correo = "+mail}, function(err, rows, fields) {

    //var foundPwd = user.read(2);
    //console.log('Entre a users.find y');
    //console.log('Encontre que la contrasenia de la BD es: ');
    //res.json({pwd:foundPwd});
	//});
});


module.exports = router;