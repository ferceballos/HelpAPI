/**
 * @api {get} /login/:mail/:pwd Login
 * @apiName HelpApi
 * @apiGroup Users
 *
 * @apiParam {String} Correo Correo del Usuario
 * @apiParam {String} Password Contraseña del Usuario
 *
 * @apiSuccess {json} Credenciales Manda un mensaje con los datos del usuario
 * @apiSuccessExample {json} Credencial 
 * {
        code: 3,
        msg: 'Las credenciales son correctas',
        user: {
        id: "ID",
        name: "Nombre",
        mail: "Correo",
        rol: "Rol",
        dep: "Dependencia"
    }
 * 
 * @apiError {json} Error1 Manda un mensaje de correo no registrado
 * @apiErrorExample {json} Error1 
 * { code: 1, msg: 'El correo introducido no está registrado' }
 * 
 * @apiError {json} Error2 Manda un mensaje de contraseña incorrecta
 * @apiErrorExample {json} Error2 
 * { code: 2,msg: 'La contraseña es incorrecta' }
 * 
 */



/**
 * @api {get} /getbyfolio/:folio Obtener​ ​un​ ​ticket
 * @apiGroup Tickets
 *
 * @apiParam {Number} Folio Número de folio
 * 
 * @apiSuccess {json} Ticket Manda un json con la info del ticket
 * @apiSuccessExample {json} Ticket 
 * {
        folio: "folio",
        fechaAlta: "fecha_alta",
        peticion: "peticion",
        init: "init",
        fechaCierre: "fecha_cierre",
        rate: "calificacion",
        status: "status",
        solicitante: "usuario_solcitante",
        bibliotecario: "bibliotecario",
        biblioteca: "dependencia"
    }
 * 
 * @apiError {json} Error1 Manda un mensaje de folio no existente
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: 'Folio no existente' }
 */

/**
 * @api {get} /getbyuser/:user Obtener​ los ​tickets de un usuario
 * @apiGroup Tickets
 *
 * @apiParam {String} Usuario Correo del usuario
 * 
 * @apiSuccess {json} Ticket Manda un json con la info del ticket
 * @apiSuccessExample {json} Ticket 
 * {
        folio: "folio",
        fechaAlta: "fecha_alta",
        peticion: "peticion",
        init: "init",
        fechaCierre: "fecha_cierre",
        rate: "calificacion",
        status: "status",
        solicitante: "usuario_solcitante",
        bibliotecario: "bibliotecario",
        biblioteca: "dependencia"
    }
 * 
 * @apiError {json} Error1 Manda un mensaje de Usuario sin tickets o Usuario inexistente
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: 'Usuario sin tickets o Usuario inexistente' }
 */

/**
 * @api {get} /getAll Obtener​ ​todos​ ​los​ ​tickets​
 * @apiGroup Tickets
 *
 * @apiSuccess {json} Ticket Manda un json con la info del ticket
 * @apiSuccessExample {json} Ticket 
 * {
        folio: "folio",
        fechaAlta: "fecha_alta",
        peticion: "peticion",
        init: "init",
        fechaCierre: "fecha_cierre",
        rate: "calificacion",
        status: "status",
        solicitante: "usuario_solcitante",
        bibliotecario: "bibliotecario",
        biblioteca: "dependencia"
    }
 * 
 * @apiError {json} Error1 Manda un mensaje de Usuario sin tickets o Usuario inexistente
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: 'Usuario sin tickets o Usuario inexistente' }
 */

/**
 * @api {get} /getByLibrarian/:idl Obtener​ ​todos​ ​los​ ​tickets​ ​asignados a un bibliotecario
 * @apiGroup Tickets
 *
 * * @apiParam {Number} ID ID del bibliotecario
 * 
 * @apiSuccess {json} Ticket Manda un json con la info del ticket
 * @apiSuccessExample {json} Ticket 
 * {
        folio: "folio",
        fechaAlta: "fecha_alta",
        peticion: "peticion",
        init: "init",
        fechaCierre: "fecha_cierre",
        rate: "calificacion",
        status: "status",
        solicitante: "usuario_solcitante",
        bibliotecario: "bibliotecario",
        biblioteca: "dependencia"
    }
 * 
 * @apiError {json} Error1 Manda un mensaje de Usuario sin tickets o Usuario inexistente
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: 'Usuario sin tickets o Usuario inexistente' }
 */

/**
 * @api {get} /getbylibrary/:dep Obtener todos los tickets asignados a una biblioteca
 * @apiGroup Tickets
 *
 * @apiParam {Number} ID ID de la biblioteca
 * 
 * @apiSuccess {json} Ticket Manda un json con la info del ticket
 * @apiSuccessExample {json} Ticket 
 * {
        folio: "folio",
        fechaAlta: "fecha_alta",
        peticion: "peticion",
        init: "init",
        fechaCierre: "fecha_cierre",
        rate: "calificacion",
        status: "status",
        solicitante: "usuario_solcitante",
        bibliotecario: "bibliotecario",
        biblioteca: "dependencia"
    }
 * 
 * @apiError {json} Error1 Manda un mensaje de Biblioteca sin tickets
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: 'Biblioteca sin tickets' }
 */

/**
 * @api {get} /getByNew Obtener​ ​todos​ ​los​ ​tickets​ ​que​ son nuevos
 * @apiGroup Tickets
 *
 * @apiSuccess {json} Ticket Manda un json con la info del ticket
 * @apiSuccessExample {json} Ticket 
 * {
        folio: "folio",
        fechaAlta: "fecha_alta",
        peticion: "peticion",
        init: "init",
        fechaCierre: "fecha_cierre",
        rate: "calificacion",
        status: "status",
        solicitante: "usuario_solcitante",
        bibliotecario: "bibliotecario",
        biblioteca: "dependencia"
    }
 */

/**
 * @api {get} /getByDoing Obtener​ ​todos​ ​los​ ​tickets​ ​que​ estan en proceso
 * @apiGroup Tickets
 *
 * @apiSuccess {json} Ticket Manda un json con la info del ticket
 * @apiSuccessExample {json} Ticket 
 * {
        folio: "folio",
        fechaAlta: "fecha_alta",
        peticion: "peticion",
        init: "init",
        fechaCierre: "fecha_cierre",
        rate: "calificacion",
        status: "status",
        solicitante: "usuario_solcitante",
        bibliotecario: "bibliotecario",
        biblioteca: "dependencia"
    } 
 *@apiError {String} Error1 ID del usuario indefinido
 */

/**
 * @api {get} /getByDoing/:idu Obtener​ ​todos​ ​los​ ​tickets​ ​que​ estan en proceso y no están asignados ya a un bibliotecario
 * @apiGroup Tickets
 *
 * @apiParam {String} Bibliotecario Correo del bibliotecario
 * 
 * @apiSuccess {json} Ticket Manda un json con la info del ticket
 * @apiSuccessExample {json} Ticket 
 * {
        folio: "folio",
        fechaAlta: "fecha_alta",
        peticion: "peticion",
        init: "init",
        fechaCierre: "fecha_cierre",
        rate: "calificacion",
        status: "status",
        solicitante: "usuario_solcitante",
        bibliotecario: "bibliotecario",
        biblioteca: "dependencia"
    }
 * 
 * @apiError {String} Error1 ID del usuario indefinido
 */

/**
 * @api {get} /getByDone Obtener​ ​todos​ ​los​ ​tickets​ ​que​ estan cerrados
 * @apiGroup Tickets
 * 
 * @apiSuccess {json} Ticket Manda un json con la info del ticket
 * @apiSuccessExample {json} Ticket 
 * {
        folio: "folio",
        fechaAlta: "fecha_alta",
        peticion: "peticion",
        init: "init",
        fechaCierre: "fecha_cierre",
        rate: "calificacion",
        status: "status",
        solicitante: "usuario_solcitante",
        bibliotecario: "bibliotecario",
        biblioteca: "dependencia"
    }
 * 
 */

/**
 * @api {get} /mod/librarian/:idt/:idb Asignar​ ​un​ ​ticket​ ​a​ ​un​ ​bibliotecario
 * @apiGroup Tickets
 *
 * @apiParam {Number} Ticket Número de folio
 * @apiParam {String} Bibliotecario Correo de bibliotecario
 * 
 * @apiSuccess {json} Mensaje Manda un menseja de confirmación
 * @apiSuccessExample {json} Mensaje 
 * { code: 1, msg: "La pregunta #12 ha sido asignada" }
 * 
 * @apiError {String} Error1 Manda un mensaje de error
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: "Ha ocurrido un problema al asignar, inténtelo de nuevo" }
 */

/**
 * @api {get} /mod/library/:idt/:dep Asignar​ ​un​ ​ticket​ ​a​ una biblioteca
 * @apiGroup Tickets
 *
 * @apiParam {Number} Ticket ID del Ticket
 * @apiParam {Number} Biblioteca ID de la Biblioteca
 * 
 * @apiSuccess {json} Mensaje Manda un mensaje de exito
 * @apiSuccessExample {json} Mensaje 
 * { code: 1, msg: "Biblioteca asignada con éxito" }
 * 
 * @apiError {json} Error1 Manda un mensaje de error
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: "Ha ocurrido un problema al asignar, inténtelo de nuevo" }
 */

/**
 * @api {get} /create/:peti/:init/:ids Crear un ticket
 * @apiGroup Tickets
 *
 * @apiParam {String} Peticion La pregunta que se quiere hacer
 * @apiParam {Number} Usuario ID usuario
 * @apiParam {String} MsgInit Mensaje inicial
 * 
 * @apiSuccess {json} Mensaje Manda un mensaje de éxito
 * @apiSuccessExample {json} Mensaje 
 * { code: 1, msg: "Ticket enviado con éxito" }
 * 
 * @apiError {json} Error1 Manda un mensaje de error
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: "Ha ocurrido un problema al enviar el ticket, inténtelo de nuevo" }
 */

/**
 * @api {get} /log/insert/:comentario/:idet/:idt Crear un registro en el historial de un ticket
 * @apiGroup Tickets
 *
 * @apiParam {String} Coment Comentario
 * @apiParam {Number} Etiqueta Id Etiqueta
 * @apiParam {Number} Ticket Id Ticket
 * 
 * @apiSuccess {json} Mensaje Manda un mensaje de éxito
 * @apiSuccessExample {json} Mensaje 
 * { code: 1, msg: "Registro en historial enviado con éxito" }
 * 
 * @apiError {json} Error1 Manda un mensaje de error
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: "Ha ocurrido un problema al enviar el registro a historial, inténtelo de nuevo" }
 */

/**
 * @api {get} /mod/message/:usr/:idt/:msg Mandar mensaje a un ticket
 * @apiGroup Tickets
 *
 * @apiParam {String} Usuario Correo del usuario
 * @apiParam {Number} Ticket Id Ticket
 * @apiParam {String} Mensaje Mensaje de contestación
 * 
 * @apiSuccess {json} Mensaje Manda un mensaje de éxito
 * @apiSuccessExample {json} Mensaje 
 * { code: 1, msg: "Mensaje enviado con éxito" }
 * 
 * @apiError {json} Error1 Manda un mensaje de error
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: "Ha ocurrido un problema al enviar el mensaje, inténtelo de nuevo" }
 */

/**
 * @api {get} /get/messages/:idt Obtener todos los mensajes de un ticket
 * @apiGroup Tickets
 *
 * @apiParam {Number} Ticket ID del Ticket
 * 
 * @apiSuccess {json} Mensaje Manda un json con los datos del mensaje
 * @apiSuccessExample {json} Mensaje 
 *      {
          id: "id",
          userMsg: "mensaje",
          fecha: "fecha",
          contenido: "contenido"
        }
 * 
 * @apiError {json} Error1 Manda un mensaje de folio no existente
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: "Ha ocurrido un problema al tratar de regresar los mensajes, inténtelo de nuevo" }
 */

/**
 * @api {get} /mod/status/:idt/:estado Modificar​ ​el​ ​estado​ ​de​ ​un​ ​ticket
 * @apiGroup Tickets
 *
 * @apiParam {Number} Ticket ID del Ticket
 * @apiParam {Number} Estado ID de estado
 * 
 * @apiSuccess {json} Mensaje Manda un mensaje de éxito 
 * @apiSuccessExample {json} Mensaje 
 * { code: 1, msg: "Status cambiado con éxito" }
 * 
 * @apiError {json} Error1 Manda un mensaje de error
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: "Ha ocurrido un problema al tratar de regresar los mensajes, inténtelo de nuevo" }
 */

/**
 * @api {get} /mod/rate/:idt/:stars Calificar un ticket
 * @apiGroup Tickets
 *
 * @apiParam {Number} Ticket ID del Ticket
 * @apiParam {Number} Estrellas Cantidad de Estrellas
 * 
 * @apiSuccess {json} Mensaje Manda un mensaje de éxito 
 * @apiSuccessExample {json} Mensaje 
 * { code: 1, msg: "Status cambiado con éxito" }
 * 
 * @apiError {json} Error1 Manda un mensaje de error
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: "Ha ocurrido un problema al cambiar calificacion, inténtelo de nuevo" }
 */

/**
 * @api {get} /countAll/:fechainicio/:fechatermino Estadistica de tickets en un rango de fecha
 * @apiGroup Tickets
 *
 * @apiParam {Date} Finicio ID del Ticket
 * @apiParam {Date} Ftermino Cantidad de Estrellas
 * 
 * @apiSuccess {json} Estadistica Manda un json con las estadisticas 
 * @apiSuccessExample {json} Estadistica 
 * {
 * todos:"[total:"36"]",
 * nuevos:"[total:"10"]",
 * enproceso:"[total:"6"]",
 * cerrados:"[total:"20"]",
 * estrellas1:"[total:"0"]",
 * estrellas2:"[total:"4"]",
 * estrellas3:"[total:"0"]",
 * estrellas4:"[total:"10"]",
 * estrellas5:"[total:"6"]"
 * }
 * 
 */

/**
 * @api {get} /getLibrarians Obtener todos los usuarios que sean bibliotecarios
 * @apiGroup Users
 * 
 * @apiSuccess {json} Mensaje Manda un mensaje con los datos del bibliotecario 
 * @apiSuccessExample {json} Mensaje 
 * {
          id: "ID",
          name: "Nombre",
          mail: "Correo",
          rol: "Rol",
          dep: "Dependencia",
        }
 * 
 * @apiError {json} Error1 Manda un mensaje de error
 * @apiErrorExample {json} Error1 
 * { code: 1, msg: 'Bibliotecarios no encontrados' }
 */

/**
 * @api {get} /getStudents Obtener todos los usuarios que sean universitarios
 * @apiGroup Users
 * 
 * @apiSuccess {json} Mensaje Manda un mensaje con los datos del universitario 
 * @apiSuccessExample {json} Mensaje 
 * {
          id: "ID",
          name: "Nombre",
          mail: "Correo",
          rol: "Rol",
          dep: "Dependencia",
        }
 * 
 * @apiError {json} Error1 Manda un mensaje de error
 * @apiErrorExample {json} Error1 
 * { code: 1, msg: 'Universitarios no encontrados' }
 */

/**
 * @api {get} /getResponsables Obtener todos los usuarios que sean responsables
 * @apiGroup Users
 * 
 * @apiSuccess {json} Mensaje Manda un mensaje con los datos del responsable 
 * @apiSuccessExample {json} Mensaje 
 * {
          id: "ID",
          name: "Nombre",
          mail: "Correo",
          rol: "Rol",
          dep: "Dependencia",
        }
 * 
 * @apiError {json} Error1 Manda un mensaje de error
 * @apiErrorExample {json} Error1 
 * { code: 1, msg: 'Responsables no encontrados' }
 */

/**
 * @api {get} /getDep Obtener todas las dependencias
 * @apiGroup Users
 * 
 * @apiSuccess {json} Mensaje Manda un mensaje con los datos de la dependencia 
 * @apiSuccessExample {json} Mensaje 
 * {
          id: "ID",
          nombre: "Dependencia"
        }
 * 
 * @apiError {json} Error1 Manda un mensaje de error
 * @apiErrorExample {json} Error1 
 * { code: 1, msg: 'Dependencias no encontradas' }
 */

/**
 * @api {get} /signup/:name/:mail/:pwd/:rol/:dep Registrar un Usuaio 
 * @apiGroup Users
 *
 * @apiParam {String} Nombre Nombre de usuario
 * @apiParam {String} Correo Correo de usuario
 * @apiParam {String} Password Contraseña de usuario
 * @apiParam {Number} Rol Rol del usuario
 * @apiParam {Number} Dep Dependencia del usuario
 * 
 * @apiSuccess {json} Ticket Manda un mensaje de éxito
 * @apiSuccessExample {json} Ticket 
 * { code: 1, msg: "Usuario registrado con éxito" }
 * 
 * @apiError {json} Error1 Manda un mensaje de error
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: "Ha ocurrido un problema con el registro, inténtelo de nuevo" }
 */

/**
 * @api {get} /delete/:id Borrar Usuario 
 * @apiGroup Users
 *
 * @apiParam {Number} Usuario ID de usuario
 * 
 * @apiSuccess {json} Ticket Manda un mensaje de éxito
 * @apiSuccessExample {json} Ticket 
 * { code: 1, msg: 'Removido con exito' }
 * 
 * @apiError {json} Error1 Manda un mensaje de error
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: 'Ha ocurrido un problema al borrar' }
 */

/**
 * @api {get} /modrol/:id/:rol Modifcar el rol de un usuario
 * @apiGroup Users
 *
 * @apiParam {Number} Usuario ID de usuario
 * @apiParam {Number} Rol Rol del usuario
 * 
 * @apiSuccess {json} Ticket Manda un mensaje de éxito
 * @apiSuccessExample {json} Ticket 
 * { code: 1, msg: 'El rol ha sido modificado' }
 * 
 * @apiError {json} Error1 Manda un mensaje de error
 * @apiErrorExample {json} Error1 
 * { code: 2, msg: 'Ha ocurrido un error al tratar de hacer la modificacion' }
 */