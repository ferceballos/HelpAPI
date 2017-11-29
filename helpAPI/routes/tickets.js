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

//Se hace coneccion a la tabla de Tickets
var Ticket = MyAppModel.extend({
  tableName: "tickets",
});

//Se hace coneccion a la tabla de Mensajes
var Mensaje = MyAppModel.extend({
  tableName: "mensajes",
});

ticket = new Ticket();
var mensaje = new Mensaje();

//Direcciones y metodos empiezan aqui

//Obtener​ ​un​ ​ticket
router.get('/getbyfolio/:folio', function (req, res, next) {
  var folio = req.params.folio;
  //Regresa todos los datos del ticket con el folio solicitado 

  ticket.query('select ti_folio, date_format(ti_fecha_hora_alta, "%M %d, %Y") as fecha_alta, ti_peticion, ti_init, date_format(ti_fecha_hora_cierre, "%M %d, %Y") as fecha_cierre, ti_calificacion, st_status, US1.us_nombre as usuario_solcitante, (select us_nombre from usuarios where us_id = ti_usuario_bibliotecario) as usuario_bibliotecario, de_dependencia from tickets left join status on st_id= ti_status inner join usuarios US1 on US1.us_id = ti_usuario_solicitante left join dependencias on de_id = ti_biblioteca WHERE ti_folio =' + folio, function (err, rows) {
    if (rows != undefined) {
      var tickets = {
        ticketito: []
      };

      for (var i = 0; i < rows.length; i++) {
        tickets.ticketito.push({
          folio: rows[i].ti_folio,
          fechaAlta: rows[i].fecha_alta,
          peticion: rows[i].ti_peticion,
          init: rows[i].ti_init,
          fechaCierre: rows[i].fecha_cierre,
          rate: rows[i].ti_calificacion,
          status: rows[i].st_status,
          solicitante: rows[i].usuario_solcitante,
          bibliotecario: rows[i].usuario_bibliotecario,
          biblioteca: rows[i].de_dependencia
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
  //Usuario
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
      res.json({ code: 2, msg: 'Usuario sin tickets o Usuario inexistente' });
  })
});

//Obtener​ ​todos​ ​los​ ​tickets​ ​del universo
router.get('/getAll', function (req, res, next) {

  //Regresa todos los datos de todos los tickets que tenga un usuario 
  ticket.query('select ti_folio, date_format(ti_fecha_hora_alta, "%M %d, %Y") as fecha_alta, ti_peticion, ti_init, date_format(ti_fecha_hora_cierre, "%M %d, %Y") as fecha_cierre, ti_calificacion, st_status, US1.us_nombre as usuario_solcitante, (select us_nombre from usuarios where us_id = ti_usuario_bibliotecario) as usuario_bibliotecario, de_dependencia from tickets left join status on st_id= ti_status inner join usuarios US1 on US1.us_id = ti_usuario_solicitante left join dependencias on de_id = ti_biblioteca', function (err, rows) {
    //ticket.query("UPDATE tickets SET TI_Usuario_Bibliotecario = " + idb + " WHERE TI_Folio='" + idt + "';", function (err, roows) {

    if (rows != undefined) {
      var tickets = {
        ticketito: []
      };

      for (var i = 0; i < rows.length; i++) {
        tickets.ticketito.push({
          folio: rows[i].ti_folio,
          fechaAlta: rows[i].fecha_alta,
          peticion: rows[i].ti_peticion,
          init: rows[i].ti_init,
          fechaCierre: rows[i].fecha_cierre,
          rate: rows[i].ti_calificacion,
          status: rows[i].st_status,
          solicitante: rows[i].usuario_solcitante,
          bibliotecario: rows[i].usuario_bibliotecario,
          biblioteca: rows[i].de_dependencia
        });
      }

      res.send(tickets);

    }
    else
      res.json({ code: 2, msg: 'Usuario sin tickets o Usuario inexistente' });
  })
});

//Obtener​ ​todos​ ​los​ ​tickets​ ​asignados a un bibliotecario
router.get('/getByLibrarian/:idl', function (req, res, next) {
  //Usuario
  var idl = req.params.idl;

  //Regresa todos los datos de todos los tickets que tenga un usuario 
  ticket.query('select TI_Usuario_Bibliotecario, ti_folio, date_format(ti_fecha_hora_alta, "%M %d, %Y") as fecha_alta, ti_peticion, ti_init, date_format(ti_fecha_hora_cierre, "%M %d, %Y") as fecha_cierre, ti_calificacion, ti_status, US1.us_nombre as usuario_solcitante, (select us_nombre from usuarios where us_id = ti_usuario_bibliotecario) as usuario_bibliotecario, de_dependencia from tickets left join status on st_id= ti_status inner join usuarios US1 on US1.us_id = ti_usuario_solicitante left join dependencias on de_id = ti_biblioteca WHERE ti_status <> 3 AND TI_Usuario_Bibliotecario = ' + idl, function (err, rows) {
    //ticket.query("UPDATE tickets SET TI_Usuario_Bibliotecario = " + idb + " WHERE TI_Folio='" + idt + "';", function (err, roows) {

    if (rows != undefined) {
      var tickets = {
        ticketito: []
      };

      for (var i = 0; i < rows.length; i++) {
        tickets.ticketito.push({
          folio: rows[i].ti_folio,
          fechaAlta: rows[i].fecha_alta,
          peticion: rows[i].ti_peticion,
          init: rows[i].ti_init,
          fechaCierre: rows[i].fecha_cierre,
          rate: rows[i].ti_calificacion,
          status: rows[i].ti_status,
          solicitante: rows[i].usuario_solcitante,
          bibliotecario: rows[i].usuario_bibliotecario,
          biblioteca: rows[i].de_dependencia
        });
      }

      res.send(tickets);

    }
    else
      res.json({ code: 2, msg: 'Usuario sin tickets o Usuario inexistente' });
  })
});

//Obtener todos los tickets asignados a una biblioteca
router.get('/getbylibrary/:dep', function (req, res, next) {
  //ID de la Libreria 
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

//Obtener​ ​todos​ ​los​ ​tickets​ ​que​ son nuevos
router.get('/getByNew', function (req, res, next) {
  //Regresa todos los datos de los tickets con TI_Status 1 
  ticket.find('all', { where: "TI_Status=1" }, function (err, rows) {
    {
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
  })
});

//Obtener​ ​todos​ ​los​ ​tickets​ ​que​ estan en proceso (Admin)
router.get('/getByDoing', function (req, res, next) {


  //Regresa todos los datos de los tickets con TI_Status 2 y que no esten ya asignados al bibliotecario que esta consultando
  ticket.query("SELECT * FROM `tickets` WHERE `TI_Status` = 2  ;", function (err, rows) {
    {

      if (rows == undefined) {
        res.send('ID del usuario indefinido');
        console.log('ID del usuario indefinido')
      }

      else {
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
    }
  })
});


//Obtener​ ​todos​ ​los​ ​tickets​ ​que​ estan en proceso y no están asignados ya a un bibliotecario
router.get('/getByDoing/:idu', function (req, res, next) {

  var idu = req.params.idu;
  console.log(idu)

  //Regresa todos los datos de los tickets con TI_Status 2 y que no esten ya asignados al bibliotecario que esta consultando
  ticket.query("SELECT * FROM `tickets` WHERE `TI_Status` = 2 AND `TI_Usuario_Bibliotecario` IS NULL OR `TI_Usuario_Bibliotecario` <> " + idu + ";", function (err, rows) {
    {
      
      if (rows == undefined) {
        res.send('ID del usuario indefinido');
        console.log('ID del usuario indefinido')
      }

      else {
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
    }
  })
});

//Obtener​ ​todos​ ​los​ ​tickets​ ​que​ estan cerrados
router.get('/getByDone', function (req, res, next) {
  //Regresa todos los datos de los tickets con TI_Status 1 
  ticket.find('all', { where: "TI_Status=3" }, function (err, rows) {
    {
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
  })
});

router.get('/', function (req, res, next) {
  res.send('Here are the tickets methods')
});

//Asignar​ ​un​ ​ticket​ ​a​ ​un​ ​bibliotecario
router.get('/mod/librarian/:idt/:idb', function (req, res, next) {
  //Esta variable es el ID del Ticket
  var idt = req.params.idt;
  //Esta variable es el ID del Bibliotecario 
  var idb = req.params.idb;

  ticket.query("UPDATE tickets SET TI_Usuario_Bibliotecario = " + idb + " WHERE TI_Folio='" + idt + "';", function (err, callback) {

    if (callback != null)
      res.json({ code: 1, msg: "La pregunta #" + idt + " ha sido asignada" });
    else
      res.json({ code: 2, msg: "Ha ocurrido un problema al asignar, inténtelo de nuevo" });


  })
});

//Asignar​ ​un​ ​ticket​ ​a​ una biblioteca
router.get('/mod/library/:idt/:dep', function (req, res, next) {
  //ID del Ticket
  var idt = req.params.idt;
  //ID de la Biblioteca
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
  //Peticion
  var peti = req.params.peti;
  //Usuario
  var ids = req.params.ids;
  //Mensaje Inicial
  var init = req.params.init;

  console.log('peti', peti, ' ', 'ids', ids, ' ', 'init', init);
  ticket.query("INSERT INTO tickets (TI_Fecha_Hora_Alta,TI_Peticion,TI_Status,TI_Usuario_Solicitante, TI_Init) VALUES (now(),'" + peti + "','1','" + ids + "','" + init + "');", function (err, callback) {
    if (callback != null)
      res.json({ code: 1, msg: "Ticket enviado con éxito" });
    else
      res.json({ code: 2, msg: "Ha ocurrido un problema al enviar el ticket, inténtelo de nuevo" });
  });

});

//Crear un registro en el historial de un ticket
router.get('/log/insert/:comentario/:idet/:idt', function (req, res, next) {
  //Comentario del Ticket
  var comentario = req.params.comentario;
  //Id Etiqueta 
  var idet = req.params.idet;
  //Id Ticket
  var idt = req.params.idt;

  ticket.query("INSERT INTO `logs`(`lo_fecha`, `lo_comentario`, `lo_etiqueta`, `lo_ticket`) VALUES (now(),'" + comentario + "'," + idet + "," + idt + ")", function (err, callback) {
    if (callback != null)
      res.json({ code: 1, msg: "Registro en historial enviado con éxito" });
    else
      res.json({ code: 2, msg: "Ha ocurrido un problema al enviar el registro a historial, inténtelo de nuevo" });
  });

});

// Mandar mensaje a un ticket
router.get('/mod/message/:usr/:idt/:msg', function (req, res, next) {
  //Usuario
  var usr = req.params.usr;
  //Id Ticket
  var idt = req.params.idt;
  //Mensaje 
  var msg = req.params.msg;

  mensaje.query("INSERT INTO `mensajes`(`me_ticket`, `me_usuario`, `me_fecha`, `me_contenido`) VALUES (" + idt + ", " + usr + ", now(), '" + msg + "')", function (err, callback) {
    if (callback != null)
      res.json({ code: 1, msg: "Mensaje enviado con éxito" });
    else
      res.json({ code: 2, msg: "Ha ocurrido un problema al enviar el mensaje, inténtelo de nuevo" });
  });
});

// Obtener todos los mensajes de un ticket
router.get('/get/messages/:idt', function (req, res, next) {
  //ID del Ticket 
  var idt = req.params.idt;


  mensaje.query("SELECT * FROM `mensajes` WHERE me_ticket =" + idt, function (err, rows) {
    if (rows[0] != null) {
      var mensajes = {
        mensajitos: []
      };

      for (var i = 0; i < rows.length; i++) {
        mensajes.mensajitos.push({
          id: rows[i].me_id,
          userMsg: rows[i].me_usuario,
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
  //Id Ticket
  var idt = parseInt(req.params.idt);
  //Estado del Ticket 
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
  //Id Ticket
  var idt = parseInt(req.params.idt);
  //Cantidad de Estrellas
  var stars = parseInt(req.params.stars);
  console.log(idt, ' idt')
  console.log(stars, ' stars')

  ticket.query("UPDATE tickets SET TI_Calificacion = '" + stars + "' WHERE TI_Folio = '" + idt + "';", function (err, callback) {
    if (callback != null) {
      res.json({ code: 1, msg: "Status cambiado con éxito" });
    }
    else {
      res.json({ code: 2, msg: "Ha ocurrido un problema al cambiar calificacion, inténtelo de nuevo" });
    }
  });
});

router.get('/', function (req, res, next) {
  res.send('Here are the tickets methods')
});

router.get('/countAll/:fechainicio/:fechatermino', function (req, res, next){
  var fechainicio = req.params.fechainicio;
  var fechatermino = req.params.fechatermino;
  var totaltickets = {datos:[]};

  ticket.query("SELECT COUNT(*) AS total FROM `tickets` WHERE TI_Fecha_Hora_Alta >= '"+fechainicio+"' AND TI_Fecha_Hora_Alta <= '"+fechatermino+"';", function (err, rows){
    totaltickets.datos.push({total:rows[0].total});
    res.send(totaltickets);
  });
});



module.exports = router;