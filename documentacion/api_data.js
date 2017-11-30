define({ "api": [
  {
    "type": "get",
    "url": "/countAll/:fechainicio/:fechatermino",
    "title": "Estadistica de tickets en un rango de fecha",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "Finicio",
            "description": "<p>ID del Ticket</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "Ftermino",
            "description": "<p>Cantidad de Estrellas</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Estadistica",
            "description": "<p>Manda un json con las estadisticas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Estadistica ",
          "content": "{\ntodos:\"[total:\"36\"]\",\nnuevos:\"[total:\"10\"]\",\nenproceso:\"[total:\"6\"]\",\ncerrados:\"[total:\"20\"]\",\nestrellas1:\"[total:\"0\"]\",\nestrellas2:\"[total:\"4\"]\",\nestrellas3:\"[total:\"0\"]\",\nestrellas4:\"[total:\"10\"]\",\nestrellas5:\"[total:\"6\"]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetCountallFechainicioFechatermino"
  },
  {
    "type": "get",
    "url": "/create/:peti/:init/:ids",
    "title": "Crear un ticket",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Peticion",
            "description": "<p>La pregunta que se quiere hacer</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Usuario",
            "description": "<p>ID usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "MsgInit",
            "description": "<p>Mensaje inicial</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Manda un mensaje de éxito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Mensaje ",
          "content": "{ code: 1, msg: \"Ticket enviado con éxito\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: \"Ha ocurrido un problema al enviar el ticket, inténtelo de nuevo\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetCreatePetiInitIds"
  },
  {
    "type": "get",
    "url": "/get/messages/:idt",
    "title": "Obtener todos los mensajes de un ticket",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Ticket",
            "description": "<p>ID del Ticket</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Manda un json con los datos del mensaje</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Mensaje ",
          "content": "{\n     id: \"id\",\n     userMsg: \"mensaje\",\n     fecha: \"fecha\",\n     contenido: \"contenido\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de folio no existente</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: \"Ha ocurrido un problema al tratar de regresar los mensajes, inténtelo de nuevo\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetGetMessagesIdt"
  },
  {
    "type": "get",
    "url": "/getAll",
    "title": "Obtener​ ​todos​ ​los​ ​tickets​",
    "group": "Tickets",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Ticket",
            "description": "<p>Manda un json con la info del ticket</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ticket ",
          "content": "{\n        folio: \"folio\",\n        fechaAlta: \"fecha_alta\",\n        peticion: \"peticion\",\n        init: \"init\",\n        fechaCierre: \"fecha_cierre\",\n        rate: \"calificacion\",\n        status: \"status\",\n        solicitante: \"usuario_solcitante\",\n        bibliotecario: \"bibliotecario\",\n        biblioteca: \"dependencia\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de Usuario sin tickets o Usuario inexistente</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: 'Usuario sin tickets o Usuario inexistente' }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetGetall"
  },
  {
    "type": "get",
    "url": "/getByDoing",
    "title": "Obtener​ ​todos​ ​los​ ​tickets​ ​que​ estan en proceso",
    "group": "Tickets",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Ticket",
            "description": "<p>Manda un json con la info del ticket</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ticket ",
          "content": "{\n        folio: \"folio\",\n        fechaAlta: \"fecha_alta\",\n        peticion: \"peticion\",\n        init: \"init\",\n        fechaCierre: \"fecha_cierre\",\n        rate: \"calificacion\",\n        status: \"status\",\n        solicitante: \"usuario_solcitante\",\n        bibliotecario: \"bibliotecario\",\n        biblioteca: \"dependencia\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Error1",
            "description": "<p>ID del usuario indefinido</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetGetbydoing"
  },
  {
    "type": "get",
    "url": "/getByDoing/:idu",
    "title": "Obtener​ ​todos​ ​los​ ​tickets​ ​que​ estan en proceso y no están asignados ya a un bibliotecario",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Bibliotecario",
            "description": "<p>Correo del bibliotecario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Ticket",
            "description": "<p>Manda un json con la info del ticket</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ticket ",
          "content": "{\n        folio: \"folio\",\n        fechaAlta: \"fecha_alta\",\n        peticion: \"peticion\",\n        init: \"init\",\n        fechaCierre: \"fecha_cierre\",\n        rate: \"calificacion\",\n        status: \"status\",\n        solicitante: \"usuario_solcitante\",\n        bibliotecario: \"bibliotecario\",\n        biblioteca: \"dependencia\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Error1",
            "description": "<p>ID del usuario indefinido</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetGetbydoingIdu"
  },
  {
    "type": "get",
    "url": "/getByDone",
    "title": "Obtener​ ​todos​ ​los​ ​tickets​ ​que​ estan cerrados",
    "group": "Tickets",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Ticket",
            "description": "<p>Manda un json con la info del ticket</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ticket ",
          "content": "{\n        folio: \"folio\",\n        fechaAlta: \"fecha_alta\",\n        peticion: \"peticion\",\n        init: \"init\",\n        fechaCierre: \"fecha_cierre\",\n        rate: \"calificacion\",\n        status: \"status\",\n        solicitante: \"usuario_solcitante\",\n        bibliotecario: \"bibliotecario\",\n        biblioteca: \"dependencia\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetGetbydone"
  },
  {
    "type": "get",
    "url": "/getbyfolio/:folio",
    "title": "Obtener​ ​un​ ​ticket",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Folio",
            "description": "<p>Número de folio</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Ticket",
            "description": "<p>Manda un json con la info del ticket</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ticket ",
          "content": "{\n        folio: \"folio\",\n        fechaAlta: \"fecha_alta\",\n        peticion: \"peticion\",\n        init: \"init\",\n        fechaCierre: \"fecha_cierre\",\n        rate: \"calificacion\",\n        status: \"status\",\n        solicitante: \"usuario_solcitante\",\n        bibliotecario: \"bibliotecario\",\n        biblioteca: \"dependencia\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de folio no existente</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: 'Folio no existente' }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetGetbyfolioFolio"
  },
  {
    "type": "get",
    "url": "/getByLibrarian/:idl",
    "title": "Obtener​ ​todos​ ​los​ ​tickets​ ​asignados a un bibliotecario",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>ID del bibliotecario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Ticket",
            "description": "<p>Manda un json con la info del ticket</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ticket ",
          "content": "{\n        folio: \"folio\",\n        fechaAlta: \"fecha_alta\",\n        peticion: \"peticion\",\n        init: \"init\",\n        fechaCierre: \"fecha_cierre\",\n        rate: \"calificacion\",\n        status: \"status\",\n        solicitante: \"usuario_solcitante\",\n        bibliotecario: \"bibliotecario\",\n        biblioteca: \"dependencia\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de Usuario sin tickets o Usuario inexistente</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: 'Usuario sin tickets o Usuario inexistente' }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetGetbylibrarianIdl"
  },
  {
    "type": "get",
    "url": "/getbylibrary/:dep",
    "title": "Obtener todos los tickets asignados a una biblioteca",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>ID de la biblioteca</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Ticket",
            "description": "<p>Manda un json con la info del ticket</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ticket ",
          "content": "{\n        folio: \"folio\",\n        fechaAlta: \"fecha_alta\",\n        peticion: \"peticion\",\n        init: \"init\",\n        fechaCierre: \"fecha_cierre\",\n        rate: \"calificacion\",\n        status: \"status\",\n        solicitante: \"usuario_solcitante\",\n        bibliotecario: \"bibliotecario\",\n        biblioteca: \"dependencia\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de Biblioteca sin tickets</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: 'Biblioteca sin tickets' }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetGetbylibraryDep"
  },
  {
    "type": "get",
    "url": "/getByNew",
    "title": "Obtener​ ​todos​ ​los​ ​tickets​ ​que​ son nuevos",
    "group": "Tickets",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Ticket",
            "description": "<p>Manda un json con la info del ticket</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ticket ",
          "content": "{\n        folio: \"folio\",\n        fechaAlta: \"fecha_alta\",\n        peticion: \"peticion\",\n        init: \"init\",\n        fechaCierre: \"fecha_cierre\",\n        rate: \"calificacion\",\n        status: \"status\",\n        solicitante: \"usuario_solcitante\",\n        bibliotecario: \"bibliotecario\",\n        biblioteca: \"dependencia\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetGetbynew"
  },
  {
    "type": "get",
    "url": "/getbyuser/:user",
    "title": "Obtener​ los ​tickets de un usuario",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Usuario",
            "description": "<p>Correo del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Ticket",
            "description": "<p>Manda un json con la info del ticket</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ticket ",
          "content": "{\n        folio: \"folio\",\n        fechaAlta: \"fecha_alta\",\n        peticion: \"peticion\",\n        init: \"init\",\n        fechaCierre: \"fecha_cierre\",\n        rate: \"calificacion\",\n        status: \"status\",\n        solicitante: \"usuario_solcitante\",\n        bibliotecario: \"bibliotecario\",\n        biblioteca: \"dependencia\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de Usuario sin tickets o Usuario inexistente</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: 'Usuario sin tickets o Usuario inexistente' }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetGetbyuserUser"
  },
  {
    "type": "get",
    "url": "/log/insert/:comentario/:idet/:idt",
    "title": "Crear un registro en el historial de un ticket",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Coment",
            "description": "<p>Comentario</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Etiqueta",
            "description": "<p>Id Etiqueta</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Ticket",
            "description": "<p>Id Ticket</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Manda un mensaje de éxito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Mensaje ",
          "content": "{ code: 1, msg: \"Registro en historial enviado con éxito\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: \"Ha ocurrido un problema al enviar el registro a historial, inténtelo de nuevo\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetLogInsertComentarioIdetIdt"
  },
  {
    "type": "get",
    "url": "/mod/librarian/:idt/:idb",
    "title": "Asignar​ ​un​ ​ticket​ ​a​ ​un​ ​bibliotecario",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Ticket",
            "description": "<p>Número de folio</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Bibliotecario",
            "description": "<p>Correo de bibliotecario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Manda un menseja de confirmación</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Mensaje ",
          "content": "{ code: 1, msg: \"La pregunta #12 ha sido asignada\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: \"Ha ocurrido un problema al asignar, inténtelo de nuevo\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetModLibrarianIdtIdb"
  },
  {
    "type": "get",
    "url": "/mod/library/:idt/:dep",
    "title": "Asignar​ ​un​ ​ticket​ ​a​ una biblioteca",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Ticket",
            "description": "<p>ID del Ticket</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Biblioteca",
            "description": "<p>ID de la Biblioteca</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Manda un mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Mensaje ",
          "content": "{ code: 1, msg: \"Biblioteca asignada con éxito\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: \"Ha ocurrido un problema al asignar, inténtelo de nuevo\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetModLibraryIdtDep"
  },
  {
    "type": "get",
    "url": "/mod/message/:usr/:idt/:msg",
    "title": "Mandar mensaje a un ticket",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Usuario",
            "description": "<p>Correo del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Ticket",
            "description": "<p>Id Ticket</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Mensaje de contestación</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Manda un mensaje de éxito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Mensaje ",
          "content": "{ code: 1, msg: \"Mensaje enviado con éxito\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: \"Ha ocurrido un problema al enviar el mensaje, inténtelo de nuevo\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetModMessageUsrIdtMsg"
  },
  {
    "type": "get",
    "url": "/mod/rate/:idt/:stars",
    "title": "Calificar un ticket",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Ticket",
            "description": "<p>ID del Ticket</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Estrellas",
            "description": "<p>Cantidad de Estrellas</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Manda un mensaje de éxito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Mensaje ",
          "content": "{ code: 1, msg: \"Status cambiado con éxito\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: \"Ha ocurrido un problema al cambiar calificacion, inténtelo de nuevo\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetModRateIdtStars"
  },
  {
    "type": "get",
    "url": "/mod/status/:idt/:estado",
    "title": "Modificar​ ​el​ ​estado​ ​de​ ​un​ ​ticket",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Ticket",
            "description": "<p>ID del Ticket</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Estado",
            "description": "<p>ID de estado</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Manda un mensaje de éxito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Mensaje ",
          "content": "{ code: 1, msg: \"Status cambiado con éxito\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: \"Ha ocurrido un problema al tratar de regresar los mensajes, inténtelo de nuevo\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Tickets",
    "name": "GetModStatusIdtEstado"
  },
  {
    "type": "get",
    "url": "/delete/:id",
    "title": "Borrar Usuario",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Usuario",
            "description": "<p>ID de usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Ticket",
            "description": "<p>Manda un mensaje de éxito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ticket ",
          "content": "{ code: 1, msg: 'Removido con exito' }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: 'Ha ocurrido un problema al borrar' }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Users",
    "name": "GetDeleteId"
  },
  {
    "type": "get",
    "url": "/getDep",
    "title": "Obtener todas las dependencias",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Manda un mensaje con los datos de la dependencia</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Mensaje ",
          "content": "{\n          id: \"ID\",\n          nombre: \"Dependencia\"\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 1, msg: 'Dependencias no encontradas' }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Users",
    "name": "GetGetdep"
  },
  {
    "type": "get",
    "url": "/getLibrarians",
    "title": "Obtener todos los usuarios que sean bibliotecarios",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Manda un mensaje con los datos del bibliotecario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Mensaje ",
          "content": "{\n          id: \"ID\",\n          name: \"Nombre\",\n          mail: \"Correo\",\n          rol: \"Rol\",\n          dep: \"Dependencia\",\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 1, msg: 'Bibliotecarios no encontrados' }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Users",
    "name": "GetGetlibrarians"
  },
  {
    "type": "get",
    "url": "/getResponsables",
    "title": "Obtener todos los usuarios que sean responsables",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Manda un mensaje con los datos del responsable</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Mensaje ",
          "content": "{\n          id: \"ID\",\n          name: \"Nombre\",\n          mail: \"Correo\",\n          rol: \"Rol\",\n          dep: \"Dependencia\",\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 1, msg: 'Responsables no encontrados' }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Users",
    "name": "GetGetresponsables"
  },
  {
    "type": "get",
    "url": "/getStudents",
    "title": "Obtener todos los usuarios que sean universitarios",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Manda un mensaje con los datos del universitario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Mensaje ",
          "content": "{\n          id: \"ID\",\n          name: \"Nombre\",\n          mail: \"Correo\",\n          rol: \"Rol\",\n          dep: \"Dependencia\",\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 1, msg: 'Universitarios no encontrados' }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Users",
    "name": "GetGetstudents"
  },
  {
    "type": "get",
    "url": "/modrol/:id/:rol",
    "title": "Modifcar el rol de un usuario",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Usuario",
            "description": "<p>ID de usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Rol",
            "description": "<p>Rol del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Ticket",
            "description": "<p>Manda un mensaje de éxito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ticket ",
          "content": "{ code: 1, msg: 'El rol ha sido modificado' }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: 'Ha ocurrido un error al tratar de hacer la modificacion' }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Users",
    "name": "GetModrolIdRol"
  },
  {
    "type": "get",
    "url": "/signup/:name/:mail/:pwd/:rol/:dep",
    "title": "Registrar un Usuaio",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre de usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Correo",
            "description": "<p>Correo de usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Contraseña de usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Rol",
            "description": "<p>Rol del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Dep",
            "description": "<p>Dependencia del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Ticket",
            "description": "<p>Manda un mensaje de éxito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ticket ",
          "content": "{ code: 1, msg: \"Usuario registrado con éxito\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 2, msg: \"Ha ocurrido un problema con el registro, inténtelo de nuevo\" }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Users",
    "name": "GetSignupNameMailPwdRolDep"
  },
  {
    "type": "get",
    "url": "/login/:mail/:pwd",
    "title": "Login",
    "name": "HelpApi",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Correo",
            "description": "<p>Correo del Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Contraseña del Usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Credenciales",
            "description": "<p>Manda un mensaje con los datos del usuario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Credencial ",
          "content": "{\n        code: 3,\n        msg: 'Las credenciales son correctas',\n        user: {\n        id: \"ID\",\n        name: \"Nombre\",\n        mail: \"Correo\",\n        rol: \"Rol\",\n        dep: \"Dependencia\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error1",
            "description": "<p>Manda un mensaje de correo no registrado</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error2",
            "description": "<p>Manda un mensaje de contraseña incorrecta</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error1 ",
          "content": "{ code: 1, msg: 'El correo introducido no está registrado' }",
          "type": "json"
        },
        {
          "title": "Error2 ",
          "content": "{ code: 2,msg: 'La contraseña es incorrecta' }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/api.js",
    "groupTitle": "Users"
  }
] });
