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
  user.query("SELECT US_Nombre FROM usuarios WHERE US_Correo='"+mail+"' and US_Pass='"+pwd+"';", function(err, rows){
      if(rows=="")
        res.send("Datos incorrectos");
      else
        res.send(rows);
  });
});

router.get('/signup/:name/:mail/:pwd/:rol/:dep', function(req, res, next) {
  var mail = req.params.mail;
  var pwd = req.params.pwd;
  var dep =req.params.dep;
  var rol = req.params.rol;
  var name = req.params.name;
  user.query("INSERT into usuarios (US_Nombre,US_Correo,US_Pass,US_Rol,US_Dependencia) VALUES ('"+name+"','"+mail+"','"+pwd+"',"+rol+","+dep+");", function(err, callback){
    if(callback!=null) 
      res.send("Registro Correcto");
    else
      res.send("Registro Incorrecto");
  });
});




module.exports = router;