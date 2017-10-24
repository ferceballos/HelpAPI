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

  var Mensaje = MyAppModel.extend({
      tableName: "mensajes",
  });
   
  ticket = new Ticket();
  mensaje = new Mensaje();

//Direcciones y metodos empiezan aqui

//Obtener​ ​un​ ​ticket
router.get('/getbyfolio/:folio', function(req, res, next) {
  var folio = req.params.folio;
  //Regresa todos los datos del ticket con el folio solicitado 
  ticket.find('all',{where:"TI_Folio="+folio+""}, function(err, rows){
    if(rows!='')
    res.json({code:1, msg:rows});
    else
    res.json({code:2, msg:'Folio no existente'});
  })
});

//Obtener​ ​todos​ ​los​ ​tickets​ ​de​ ​un​ ​usuario
router.get('/getbyuser/:user', function(req, res, next) {
  var user = req.params.user;
  //Regresa todos los datos de todos los tickets que tenga un usuario 
  ticket.find('all',{where:"TI_Usuario_Solicitante='"+user+"'"}, function(err, rows){
    if(rows!='')
    res.json({code:1, msg:rows});
    else
    res.json({code:2, msg:'Usuario sin tickets o Usuario inexistente'});
  })
});

//Obtener​ ​todos​ ​los​ ​tickets​ ​asignados​ ​a​ ​un​ ​bibliotecario
router.get('/getbylibrarian/:id', function(req, res, next) {
  var id = req.params.id;
  //Regresa todo los datos del ticket que estan asignados a un bibliotecario 
  ticket.find('TI_Folio, TI_Fecha_Hora_Alta, TI_Peticion, TI_Fecha_Hora_Cierre, TI_Calificacion, TI_Status, TI_Usuario_Solicitante', {where:"TI_Usuario_Bibliotecario="+id+""}, function(err, rows){
    if(rows!='')
    res.json({code:1, msg:rows});
    else
    res.json({code:2, msg:'Bibliotecario sin tickes o Bibliotecario inexistente'});
  })
});

//Obtener​ ​todos​ ​los​ ​tickets​ ​que​ ​no​ ​han​ ​sido​ ​cerrados
router.get('/getbyopened', function(req, res, next) {
    //Regresa todos los datos de los tickets diferente a 3=cerrado 
    ticket.find('all',{where:"TI_Status<>3"}, function(err, rows){
      res.json({code:1, msg:rows});
    })
  });

router.get('/', function(req, res, next) {
  res.send('Here are the tickets methods')
});

// MI PARTE MADAFACA

//Asignar​ ​un​ ​ticket​ ​a​ ​un​ ​bibliotecario
router.get('/mod/librarian/:idt/:idb', function(req, res, next) {
    var idt = req.params.idt;
    var idb = req.params.idb;

    ticket.query("UPDATE tickets SET TI_Usuario_Bibliotecario = "+idb+" WHERE TI_Folio='"+idt+"';",function(err, callback){
      
if(callback!=null) 
       res.json({code:1, msg:"Bibliotecario asignado con éxito"});
     else
       res.json({code:2, msg:"Ha ocurrido un problema al asignar, inténtelo de nuevo"});
      

    })
  });

//Asignar​ ​un​ ​ticket​ ​a​ una biblioteca
router.get('/mod/library/:idt/:dep', function(req, res, next) {
    var idt = req.params.idt;
    var dep = req.params.dep;

    ticket.query("UPDATE tickets SET TI_Biblioteca = "+dep+" WHERE TI_Folio='"+idt+"';",function(err, callback){
      
if(callback!=null) 
       res.json({code:1, msg:"Biblioteca asignada con éxito"});
     else
       res.json({code:2, msg:"Ha ocurrido un problema al asignar, inténtelo de nuevo"});
      

    })
  });

//Crear un ticket
router.get('/create/:peti/:ids', function(req, res, next) {
    var peti = req.params.peti;
    var ids = req.params.ids;

  ticket.query( "INSERT INTO tickets (TI_Fecha_Hora_Alta,TI_Peticion,TI_Status,TI_Usuario_Solicitante) VALUES (now(),'"+peti+"','1','"+ids+"');" ,function(err, callback){
     if(callback!=null) 
       res.json({code:1, msg:"Ticket enviado con éxito"});
     else
       res.json({code:2, msg:"Ha ocurrido un problema al enviar el ticket, inténtelo de nuevo"});
  });

});

// Mandar mensaje a un ticket
router.get('/mod/message/:usr/:idt/:msg', function(req, res, next) {
    var usr = req.params.usr;
    var idt = req.params.idt;
    var msg = req.params.msg;

    mensaje = new Mensaje({
    me_ticket: idt,
    me_usuario: pwd,
    me_fecha: 'NOW();',
    me_contenido: msg
  });

  mensaje.save(function(err, callback){
     if(callback!=null) 
       res.json({code:1, msg:"Mensaje enviado con éxito"});
     else
       res.json({code:2, msg:"Ha ocurrido un problema al enviar el mensaje, inténtelo de nuevo"});
  });

});

//Modificar​ ​el​ ​estado​ ​de​ ​un​ ​ticket​ ​(Abierto,​ ​en​ ​proceso,​ ​cerrado,​ ​etc) 
<<<<<<< HEAD
//mod/status/[id​ ​del​ ​ticket]+[estado]  

router.get('/mod/status/:idt/:estado  ', function(req, res, next) {
    var idt = req.params.idt;
    var estado = req.params.estado;

  ticket.query( "INSERT INTO tickets (TI_Fecha_Hora_Alta,TI_Peticion,TI_Status,TI_Usuario_Solicitante) VALUES (now(),'"+peti+"','1','"+ids+"');" ,function(err, callback){
     if(callback!=null) 
       res.json({code:1, msg:"Ticket enviado con éxito"});
     else
       res.json({code:2, msg:"Ha ocurrido un problema al enviar el ticket, inténtelo de nuevo"});
  });

=======
router.get('/mod/status/:idt/:estado', function(req, res, next) {
    var idt = parseInt(req.params.idt);
    var estado = parseInt(req.params.estado) ;

    console.log('entre al metodo');

    ticket.query( "UPDATE tickets SET TI_Status = '"+estado+"' WHERE TI_Folio = '"+idt+"';" , function(err, callback){
       if(callback!=null) {
         res.json({code:1, msg:"Status cambiado con éxito"});
       }
       else{
         res.json({code:2, msg:"Ha ocurrido un problema al cambiar status, inténtelo de nuevo"});
       }
    });
>>>>>>> b5f38d4664ae9fc4b484448e49bc4303c34f18ab
});

//Calificar un ticket
router.get('/mod/rate/:idt/:stars', function(req, res, next) {
    var idt = parseInt(req.params.idt);
    var estado = parseInt(req.params.estado) ;

    console.log('entre al metodo');

    ticket.query( "UPDATE tickets SET TI_Status = '"+estado+"' WHERE TI_Folio = '"+idt+"';" , function(err, callback){
       if(callback!=null) {
         res.json({code:1, msg:"Status cambiado con éxito"});
       }
       else{
         res.json({code:2, msg:"Ha ocurrido un problema al cambiar status, inténtelo de nuevo"});
       }
    });
});

router.get('/', function(req, res, next) {
  res.send('Here are the tickets methods')
});



module.exports = router;