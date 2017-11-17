var express = require('express');
var router = express.Router();
var mysqlModel = require('mysql-model');

//Módulo para conectarnos a la base de datos
var MyAppModel = mysqlModel.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pi7',
});

var User = MyAppModel.extend({
  tableName: "usuarios",
});

user = new User();

//Comprobar si un usuario se encuentra en la base de datos
router.get('/login/:mail/:pwd', function (req, res, next) {
  var mail = req.params.mail;
  var pwd = req.params.pwd;
  //Primero que nada, verificar si el correo está registrado en la base de datos
  user.query("SELECT * FROM usuarios WHERE US_Correo='" + mail + "';", function (err, rows) {
    //Correo no registrado
    if (rows == "") {
      res.json({ code: 1, msg: 'El correo introducido no está registrado' });
    }

    //Correo registrado
    else {
      //Contrasenia incorrecta
      if (rows[0].US_Pass != pwd) {
        res.json({ code: 2, msg: 'La contraseña es incorrecta' });
      }
      //Credenciales correctas
      else if (rows[0].US_Pass == pwd) {
        res.json({
          code: 3,
          msg: 'Las credenciales son correctas',
          user: {
            id: rows[0].US_ID,
            name: rows[0].US_Nombre,
            mail: rows[0].US_Correo,
            rol: rows[0].US_Rol,
            dep: rows[0].US_Dependencia
          }
        });
      }
    }
  });
});

//Obtener todos los usuarios que sean bibliotecarios
router.get('/getLibrarians', function (req, res, next) {

  user.query("SELECT * FROM `usuarios` WHERE  us_rol = 3", function (err, rows) {
    //Correo no registrado
    if (rows == undefined) {
      res.json({ code: 2, msg: 'El correo introducido no está registrado' });
    }

    //Correo registrado
    else {

      var usuarios = {
        users: []
      };

      for (var i = 0; i < rows.length; i++) {
        usuarios.users.push({
          id: rows[i].US_ID,
          name: rows[i].US_Nombre,
          mail: rows[i].US_Correo,
          rol: rows[i].US_Rol,
          dep: rows[i].US_Dependencia,
        });
      }
      res.send(usuarios);
    }
  });
});

//Obtener todos los usuarios que sean universitarios
router.get('/getStudents', function (req, res, next) {

  user.query("SELECT * FROM `usuarios` WHERE us_rol = 1", function (err, rows) {
    //Correo no registrado
    if (rows == undefined) {
      res.json({ code: 2, msg: 'El correo introducido no está registrado' });
    }

    //Correo registrado
    else {

      var usuarios = {
        users: []
      };

      for (var i = 0; i < rows.length; i++) {
        usuarios.users.push({
          id: rows[i].US_ID,
          name: rows[i].US_Nombre,
          mail: rows[i].US_Correo,
          rol: rows[i].US_Rol,
          dep: rows[i].US_Dependencia,
        });
      }
      res.send(usuarios);
    }
  });
});


//Obtener todas las dependencias
router.get('/getDep', function (req, res, next) {


  user.query("SELECT * FROM `dependencias`", function (err, rows) {
    //No hay dependencias
    if (rows == "") {
      res.json({ code: 1, msg: 'Dependencias no encontradas' });
    }

    //Dependencias encontradas
    else {

      var dependencias = {
        dependencies: []
      };

      for (var i = 0; i < rows.length; i++) {
        dependencias.dependencies.push({
          id: rows[i].DE_ID,
          nombre: rows[i].DE_Dependencia
        });
      }
      res.send(dependencias);
    }
  });
});

//Registrar un Usuaio 
router.get('/signup/:name/:mail/:pwd/:rol/:dep', function (req, res, next) {
  var name = req.params.name;
  var mail = req.params.mail;
  var pwd = req.params.pwd;
  var rol = parseInt(req.params.rol);
  var dep = parseInt(req.params.dep);

  user = new User({
    US_Nombre: name,
    US_Correo: mail,
    US_Pass: pwd,
    US_Rol: rol,
    US_Dependencia: dep
  });

  user.save(function (err, callback) {
    if (callback != null)
      res.json({ code: 1, msg: "Usuario registrado con éxito" });
    else
      res.json({ code: 2, msg: "Ha ocurrido un problema con el registro, inténtelo de nuevo" });
  });
});

//Borrar Usuario 
router.get('/delete/:id', function (req, res, next) {
  //Id Usuario 
  var id = req.params.id;

  user.query("DELETE FROM usuarios WHERE US_ID='" + id + "';", function (err, callback) {
    if (callback != null)
      res.json({ code: 1, msg: 'Removido con exito' });
    else
      res.json({ code: 2, msg: 'Ha ocurrido un problema al borrar' })
  });
});

//Modifcar el rol de un usuario
router.get('/modrol/:id/:rol', function (req, res, next) {
  //Id del usuario
  var id = req.params.id;
  //Id del rol 
  var rol = req.params.rol;
  user.query("UPDATE usuarios SET US_Rol=" + rol + " WHERE US_ID=" + id + ";", function (err, callback) {
    if (callback != null) {
      res.json({ code: 1, msg: 'El rol ha sido modificado' });
    }
    else {
      res.json({ code: 2, msg: 'Ha ocurrido un error al tratar de hacer la modificacion' });
      console.log(callback);
    }
  });
});

module.exports = router;