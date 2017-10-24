/* Creacion de la base de datos */
DROP DATABASE IF EXISTS pi7;

CREATE DATABASE  IF NOT EXISTS `pi7`;
USE `pi7`;

DROP TABLE IF EXISTS `dependencias`;
CREATE TABLE `dependencias` (
  `DE_ID` int(10) NOT NULL AUTO_INCREMENT,
  `DE_Dependencia` varchar(50) NOT NULL,
  PRIMARY KEY (`DE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `dependencias` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `etiquetas`;
CREATE TABLE `etiquetas` (
  `ET_ID` int(10) NOT NULL AUTO_INCREMENT,
  `ET_Etiqueta` varchar(30) NOT NULL,
  PRIMARY KEY (`ET_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `etiquetas` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `RO_ID` int(10) NOT NULL AUTO_INCREMENT,
  `RO_Rol` varchar(30) NOT NULL,
  PRIMARY KEY (`RO_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `roles` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `status`;
CREATE TABLE `status` (
  `ST_ID` int(10) NOT NULL AUTO_INCREMENT,
  `ST_Status` varchar(30) NOT NULL,
  PRIMARY KEY (`ST_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `status` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `US_ID` int(10) NOT NULL AUTO_INCREMENT,
  `US_Nombre` varchar(50) NOT NULL,
  `US_Correo` varchar(50) NOT NULL,
  `US_Pass` varchar(50) NOT NULL,
  `US_Rol` int(10) NOT NULL,
  `US_Dependencia` int(10) NOT NULL,
  PRIMARY KEY (`US_ID`),
  KEY `fk_Usuario_Rol` (`US_Rol`),
  KEY `fk_Usuario_Dependencia` (`US_Dependencia`),
  CONSTRAINT `fk_Usuario_Dependencia` FOREIGN KEY (`US_Dependencia`) REFERENCES `dependencias` (`DE_ID`),
  CONSTRAINT `fk_Usuario_Rol` FOREIGN KEY (`US_Rol`) REFERENCES `roles` (`RO_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `tickets`;
CREATE TABLE `tickets` (
  `TI_Folio` int(10) NOT NULL AUTO_INCREMENT,
  `TI_Fecha_Hora_Alta` datetime NOT NULL,
  `TI_Peticion` text NOT NULL,
  `TI_Fecha_Hora_Cierre` datetime,
  `TI_Calificacion` tinyint(5),
  `TI_Status` int(10) NOT NULL,
  `TI_Usuario_Solicitante` int(10) NOT NULL,
  `TI_Usuario_Bibliotecario` int(10),
  `TI_Biblioteca` int(10),
  PRIMARY KEY (`TI_Folio`),
  KEY `fk_ticket_status` (`TI_Status`),
  KEY `fk_ticket_usuario` (`TI_Usuario_Solicitante`),
  KEY `fk_ticket_bibliotecario` (`TI_Usuario_Bibliotecario`),
  KEY `fk_ticket_biblioteca` (`TI_Biblioteca`),

  CONSTRAINT `fk_ticket_status` FOREIGN KEY (`TI_Status`) REFERENCES `status` (`ST_ID`),
  CONSTRAINT `fk_ticket_usuario` FOREIGN KEY (`TI_Usuario_Solicitante`) REFERENCES `usuarios` (`US_ID`),
  CONSTRAINT `fk_ticket_bibliotecario` FOREIGN KEY (`TI_Usuario_Bibliotecario`) REFERENCES `usuarios` (`US_ID`),
  CONSTRAINT `fk_ticket_biblioteca` FOREIGN KEY (`TI_Biblioteca`) REFERENCES `dependencias` (`DE_ID`)

) ENGINE=InnoDB DEFAULT CHARSET=latin1;


LOCK TABLES `tickets` WRITE;
UNLOCK TABLES;


DROP TABLE IF EXISTS `mensajes`;
CREATE TABLE `mensajes` (
  `me_id` int(10) NOT NULL AUTO_INCREMENT,
  `me_ticket` int(10) NOT NULL,
  `me_usuario` int(10) NOT NULL,
  `me_fecha` datetime NOT NULL,
  `me_contenido` text NOT NULL,
  PRIMARY KEY (`me_id`),
  KEY `fk_me_tickets` (`me_ticket`),
  KEY `fk_me_usuario` (`me_usuario`),
  CONSTRAINT `fk_me_tickets` FOREIGN KEY (`me_ticket`) REFERENCES `tickets` (`TI_Folio`),
  CONSTRAINT `fk_me_usuario` FOREIGN KEY (`me_usuario`) REFERENCES `usuarios` (`US_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



LOCK TABLES `usuarios` WRITE;
UNLOCK TABLES;

DROP TABLE IF EXISTS `logs`;
CREATE TABLE `logs` (
  `UT_ID` int(10) NOT NULL AUTO_INCREMENT,
  `UT_Fecha_Hora_Movimiento` datetime NOT NULL,
  `UT_Comentario` text NOT NULL,
  `UT_Status` int(10) NOT NULL,  
  `UT_Etiqueta` int(10) NOT NULL,
  `UT_Ticket` int(10) NOT NULL,
  PRIMARY KEY (`UT_ID`),
  KEY `fk_movimientos_Status` (`UT_Status`),
  KEY `fk_movimientos_Etiqueta` (`UT_Etiqueta`),
  KEY `fk_movimientos_Ticket` (`UT_Ticket`),
  CONSTRAINT `fk_movimientos_Status` FOREIGN KEY (`UT_Status`) REFERENCES `status` (`ST_ID`),
  CONSTRAINT `fk_movimientos_Etiqueta` FOREIGN KEY (`UT_Etiqueta`) REFERENCES `etiquetas` (`ET_ID`),
  CONSTRAINT `fk_movimientos_Ticket` FOREIGN KEY (`UT_Ticket`) REFERENCES `tickets` (`TI_Folio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `logs` WRITE;
UNLOCK TABLES;

/* Insercion de datos */ 





-- ETIQUETAS
INSERT INTO etiquetas (ET_Etiqueta)
VALUES
('Asignado'),
('Tomado'),
('Respondido por bibliotecario'),
('Respondido por usuario'),
('Transferido'),
('Reasignado'),
('Reabierto');

-- STATUS
INSERT INTO status (ST_Status)
VALUES
('Nuevo'),
('En proceso'),
('Cerrado');

-- ROLES
INSERT INTO roles (RO_Rol)
VALUES
('Universitario'),
('Responsable'),
('Bibliotecario'),
('Administrador');

-- DEPENDENCIAS
INSERT INTO dependencias (DE_Dependencia)
VALUES
('Biblioteca de Ciencias del Mar'),
('Biblioteca de Comercio'),
('Biblioteca Lic. Ernesto Camacho Quiñones'),
('Biblioteca de Ciencias Agropecuarias'),
('Biblioteca de los bachilleratos 5, 6 y 20'),
('Biblioteca de Ciencias Miguel de la Madrid Hurtado'),
('Biblioteca de Ciencias Sociales'),
('Biblioteca del área de la salud'),
('Biblioteca IUBA'),
('Biblioteca Pinacoteca'),
('Biblioteca Albarrada Bachilleratos 15 y 30'),
('Biblioteca Cóbano'),
('Biblioteca de Ciencias Aplicadas'),
('Biblioteca de Humanidades'),
('Biblioteca de los bachilleratos 4 y 16'),
('Biblioteca del bachillerato 17 y 25'),
('Biblioteca Nogueras'),
('Biblioteca de Ciencias Políticas y Jurídicas'),
('Biblioteca Bachillerato 32'),
('Biblioteca de los bachilleratos 12 y 13'),
('Biblioteca de bachillerato 7 y 21'),
('Biblioteca de Bachillerato 14 '),
('Biblioteca del Bachillerato Santiago'),
('Biblioteca Comercio y Nutrición');

-- USUARIO
INSERT INTO usuarios (US_Nombre, US_Correo, US_Pass, US_Rol, US_Dependencia)
VALUES
('Fernando Ceballos', 'correo@ucol.mx', '1234','1','1');


INSERT INTO tickets (TI_Fecha_Hora_Alta,TI_Peticion,TI_Status,TI_Usuario_Solicitante) VALUES (now(),'send nudes','1','1');