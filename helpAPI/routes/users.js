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
   
  var User = MyAppModel.extend({
      tableName: "usuarios",
  });
   
  user = new User();

//Comprobar si un usuario se encuentra en la base de datos
router.get('/login/:mail/:pwd', function(req, res, next) {
  var mail = req.params.mail;
  var pwd = req.params.pwd;
  //Primero que nada, verificar si el correo está registrado en la base de datos
    user.query("SELECT * FROM usuarios WHERE US_Correo='"+mail+"';", function(err, rows){
      //Correo no registrado
      if(rows==""){
        res.json({code:1, msg:'El correo introducido no está registrado'});
      }

      //Correo registrado
      else{
      	//Contrasenia incorrecta
		if(rows[0].US_Pass != pwd){
			res.json({code:2, msg:'La contraseña es incorrecta'});
		}
		//Credenciales correctas
		else if (rows[0].US_Pass == pwd){
			res.json({
				code:3, 
				msg:'Las credenciales son correctas',
				user : { 
					name: rows[0].US_Nombre,
					mail: rows[0].US_Correo,
					rol : rows[0].US_Rol,
					dep : rows[0].US_Dependencia
				}
			});
		}
      }
  });
});

router.get('/signup/:name/:mail/:pwd/:rol/:dep', function(req, res, next) {
  var name = req.params.name;
  var mail = req.params.mail;
  var pwd = req.params.pwd;
  var rol = parseInt(req.params.rol);
  var dep =parseInt(req.params.dep);

  user = new User({
  	US_Nombre: name,
    US_Correo: mail,
    US_Pass: pwd,
    US_Rol: rol,
    US_Dependencia: dep
  });

  user.save(function(err, callback){
     if(callback!=null) 
       res.json({code:1, msg:"Usuario registrado con éxito"});
     else
       res.json({code:2, msg:"Ha ocurrido un problema con el registro, inténtelo de nuevo"});
  });
});

router.get('/delete/:id', function(req, res, next) {
  var id = req.params.id;

  user.query("DELETE FROM usuarios WHERE US_ID='"+id+"';", function(err, callback){ 
    	if(callback!=null) 
        	res.json({code:1, msg:'Removido con exito'});
        else
        	res.json({code:2, msg:'Ha ocurrido un problema al borrar'})
  });
});

router.get('/modrol/:id/:rol', function(req, res, next) {
  var id = req.params.id;
  var rol = req.params.rol;
  user.query("UPDATE usuarios SET US_Rol="+rol+" WHERE US_ID="+id+";", function(err, callback){ 
     if(callback!=null){
      res.json({code:1, msg:'El rol ha sido modificado'});
    }
    else{
      res.json({code:2, msg:'Ha ocurrido un error al tratar de hacer la modificacion'});
      console.log(callback);
    }
  });
});

module.exports = router;