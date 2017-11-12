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

var Ticket = MyAppModel.extend({
  tableName: "tickets",
});

var Mensaje = MyAppModel.extend({
  tableName: "mensajes",
});

ticket = new Ticket();
mensaje = new Mensaje();

//Direcciones y metodos empiezan aqui

//Obtener​ ​un​ ​ticket
router.get('/getbyfolio/:folio', function (req, res, next) {
  var folio = req.params.folio;
  //Regresa todos los datos del ticket con el folio solicitado 
  ticket.find('all', { where: "TI_Folio=" + folio + "" }, function (err, rows) {
    if (rows != '') {
      var tickets = {
        ticketito: []
      };

      for (var i = 0; i < rows.length; i++) {
        tickets.ticketito.push({
          folio: rows[i].TI_Folio,
          fechaAlta: rows[i].TI_Fecha_Hora_Alta,
          peticion: rows[i].TI_Peticion,
          init: rows[i].TI_Init,
          fechaCierre: rows[i].TI_Fecha_Hora_Cierre,
          rate: rows[i].TI_Calificacion,
          status: rows[i].TI_Status,
          solicitante: rows[i].TI_Usuario_Solicitante,
          bibliotecario: rows[i].TI_Usuario_Bibliotecario,
          biblioteca: rows[i].TI_Biblioteca
        });
      }

      res.send(tickets);

    }
    else
      res.json({ code: 2, msg: 'Folio no existente' });
  })
});

//Obtener​ ​todos​ ​los​ ​tickets​ ​de​ ​un​ ​usuario
router.get('/getbyuser/:user', function (req, res, next) {
  var user = req.params.user;
  //Regresa todos los datos de todos los tickets que tenga un usuario 
  ticket.find('all', { where: "TI_Usuario_Solicitante='" + user + "'" }, function (err, rows) {
  //ticket.query("UPDATE tickets SET TI_Usuario_Bibliotecario = " + idb + " WHERE TI_Folio='" + idt + "';", function (err, roows) {

    if (rows != '') {
      var tickets = {
        ticketito: []
      };

      for (var i = 0; i < rows.length; i++) {
        tickets.ticketito.push({
          folio: rows[i].TI_Folio,
          fechaAlta: rows[i].TI_Fecha_Hora_Alta,
          asunto: rows[i].TI_Peticion,
          init : rows[i].TI_Init,
          fechaCierre: rows[i].TI_Fecha_Hora_Cierre,
          rate: rows[i].TI_Calificacion,
          status: rows[i].TI_Status,
          solicitante: rows[i].TI_Usuario_Solicitante,
          bibliotecario: rows[i].TI_Usuario_Bibliotecario,
          biblioteca: rows[i].TI_Biblioteca
        });
      }

      res.send(tickets);

    }
    else
      res.json({ code: 2, msg: 'Usuario sin tickets o Usuario inexistente' });
  })
});

//Obtener​ ​todos​ ​los​ ​tickets​ ​asignados​ ​a​ ​un​ ​bibliotecario
router.get('/getbylibrarian/:id', function (req, res, next) {
  var id = req.params.id;
  //Regresa todo los datos del ticket que estan asignados a un bibliotecario 
  ticket.find('TI_Folio, TI_Fecha_Hora_Alta, TI_Peticion, TI_Fecha_Hora_Cierre, TI_Calificacion, TI_Status, TI_Usuario_Solicitante', { where: "TI_Usuario_Bibliotecario=" + id + "" }, function (err, rows) {
  //ticket.query("UPDATE tickets SET TI_Usuario_Bibliotecario = " + idb + " WHERE TI_Folio='" + idt + "';", function (err, roows) {

  if (rows != '') {
      var tickets = {
        ticketito: []
      };

      for (var i = 0; i < rows.length; i++) {
        tickets.ticketito.push({
          folio: rows[i].TI_Folio,
          fechaAlta: rows[i].TI_Fecha_Hora_Alta,
          peticion: rows[i].TI_Peticion,
          fechaCierre: rows[i].TI_Fecha_Hora_Cierre,
          rate: rows[i].TI_Calificacion,
          status: rows[i].TI_Status,
          solicitante: rows[i].TI_Usuario_Solicitante,
          bibliotecario: rows[i].TI_Usuario_Bibliotecario,
          biblioteca: rows[i].TI_Biblioteca
        });
      }

      res.send(tickets);

    }
    else
      res.json({ code: 2, msg: 'Bibliotecario sin tickes o Bibliotecario inexistente' });
  })
});

//Obtener todos los tickets asignados a una biblioteca
router.get('/getbylibrary/:dep', function (req, res, next) {
  var dep = req.params.dep;
  console.log("El id de la dependencia es " + dep);


  ticket.query("SELECT * FROM `tickets` WHERE `TI_Biblioteca`=" + dep + ";", function (err, rows) {

    if (rows == "") {
      res.json({ code: 2, msg: "Ha ocurrido un problema al cambiar status, inténtelo de nuevo" });
    }

    else {
      var tickets = {
        ticketito: []
      };

      for (var i = 0; i < rows.length; i++) {
        tickets.ticketito.push({
          id: rows[i].TI_Folio,
          fechaAlta: rows[i].TI_Fecha_Hora_Alta,
          peticion: rows[i].TI_Peticion,
          fechaCierre: rows[i].TI_Fecha_Hora_Cierre,
          rate: rows[i].TI_Calificacion,
          status: rows[i].TI_Status,
          solicitante: rows[i].TI_Usuario_Solicitante,
          bibliotecario: rows[i].TI_Usuario_Bibliotecario,
          biblioteca: rows[i].TI_Biblioteca
        });
      }

      res.send(tickets);

    }
  })
});

//Obtener​ ​todos​ ​los​ ​tickets​ ​que​ ​no​ ​han​ ​sido​ ​cerrados
router.get('/getbyopened', function (req, res, next) {
  //Regresa todos los datos de los tickets diferente a 3=cerrado 
  ticket.find('all', { where: "TI_Status<>3" }, function (err, rows) {
    {
      var tickets = {
        ticketito: []
      };

      for (var i = 0; i < rows.length; i++) {
        tickets.ticketito.push({
          folio: rows[i].TI_Folio,
          fechaAlta: rows[i].TI_Fecha_Hora_Alta,
          peticion: rows[i].TI_Peticion,
          fechaCierre: rows[i].TI_Fecha_Hora_Cierre,
          rate: rows[i].TI_Calificacion,
          status: rows[i].TI_Status,
          solicitante: rows[i].TI_Usuario_Solicitante,
          bibliotecario: rows[i].TI_Usuario_Bibliotecario,
          biblioteca: rows[i].TI_Biblioteca
        });
      }

      res.send(tickets);

    }
  })
});

router.get('/', function (req, res, next) {
  res.send('Here are the tickets methods')
});

//Asignar​ ​un​ ​ticket​ ​a​ ​un​ ​bibliotecario
router.get('/mod/librarian/:idt/:idb', function (req, res, next) {
  var idt = req.params.idt;
  var idb = req.params.idb;

  ticket.query("UPDATE tickets SET TI_Usuario_Bibliotecario = " + idb + " WHERE TI_Folio='" + idt + "';", function (err, callback) {

    if (callback != null)
      res.json({ code: 1, msg: "Bibliotecario asignado con éxito" });
    else
      res.json({ code: 2, msg: "Ha ocurrido un problema al asignar, inténtelo de nuevo" });


  })
});

//Asignar​ ​un​ ​ticket​ ​a​ una biblioteca
router.get('/mod/library/:idt/:dep', function (req, res, next) {
  var idt = req.params.idt;
  var dep = req.params.dep;

  ticket.query("UPDATE tickets SET TI_Biblioteca = " + dep + " WHERE TI_Folio='" + idt + "';", function (err, callback) {

    if (callback != null)
      res.json({ code: 1, msg: "Biblioteca asignada con éxito" });
    else
      res.json({ code: 2, msg: "Ha ocurrido un problema al asignar, inténtelo de nuevo" });


  })
});

//Crear un ticket
router.get('/create/:peti/:init/:ids', function (req, res, next) {
  var peti = req.params.peti;
  var ids = req.params.ids;
  var init = req.params.init;

  ticket.query("INSERT INTO tickets (TI_Fecha_Hora_Alta,TI_Peticion,TI_Status,TI_Usuario_Solicitante, TI_Init) VALUES (now(),'" + peti + "','1','" + ids + "','" + init+ "');", function (err, callback) {
    if (callback != null)
      res.json({ code: 1, msg: "Ticket enviado con éxito" });
    else
      res.json({ code: 2, msg: "Ha ocurrido un problema al enviar el ticket, inténtelo de nuevo" });
  });

});

// Mandar mensaje a un ticket
router.get('/mod/message/:usr/:idt/:msg', function (req, res, next) {
  var usr = req.params.usr;
  var idt = req.params.idt;
  var msg = req.params.msg;

  mensaje = new Mensaje({
    me_ticket: idt,
    me_usuario: usr,
    me_fecha: 'NOW();',
    me_contenido: msg
  });
});

// Obtener todos los mensajes de un ticket
router.get('/get/messages/:idt', function (req, res, next) {
  var idt = req.params.idt;
  

  mensaje.find('all', { where: "me_ticket = "+idt }, function (err, rows) {    
    if (rows[0] != null) {
      var mensajes = {
        mensajitos: []
      };

      for (var i = 0; i < rows.length; i++) {
        mensajes.mensajitos.push({
          id : rows[i].me_id,
          usuario: rows[i].me_usuario,
          fecha: rows[i].me_fecha,
          contenido: rows[i].me_contenido
        });
      }
      res.send(mensajes);
    }
    else {
      res.json({ code: 2, msg: "Ha ocurrido un problema al tratar de regresar los mensajes, inténtelo de nuevo" });
    }
  });
});

//Modificar​ ​el​ ​estado​ ​de​ ​un​ ​ticket​ ​(Abierto,​ ​en​ ​proceso,​ ​cerrado,​ ​etc) 
router.get('/mod/status/:idt/:estado', function (req, res, next) {
  var idt = parseInt(req.params.idt);
  var estado = parseInt(req.params.estado);

  console.log('entre al metodo');

  ticket.query("UPDATE tickets SET TI_Status = '" + estado + "' WHERE TI_Folio = '" + idt + "';", function (err, callback) {
    if (callback != null) {
      res.json({ code: 1, msg: "Status cambiado con éxito" });
    }
    else {
      res.json({ code: 2, msg: "Ha ocurrido un problema al cambiar status, inténtelo de nuevo" });
    }
  });
});

//Calificar un ticket
router.get('/mod/rate/:idt/:stars', function (req, res, next) {
  var idt = parseInt(req.params.idt);
  var estado = parseInt(req.params.estado);

  console.log('entre al metodo');

  ticket.query("UPDATE tickets SET TI_Status = '" + estado + "' WHERE TI_Folio = '" + idt + "';", function (err, callback) {
    if (callback != null) {
      res.json({ code: 1, msg: "Status cambiado con éxito" });
    }
    else {
      res.json({ code: 2, msg: "Ha ocurrido un problema al cambiar status, inténtelo de nuevo" });
    }
  });
});

router.get('/', function (req, res, next) {
  res.send('Here are the tickets methods')
});



module.exports = router;