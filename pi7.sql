-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-11-2017 a las 19:31:00
-- Versión del servidor: 10.1.26-MariaDB
-- Versión de PHP: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pi7`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dependencias`
--

CREATE DATABASE pi7;
USE pi7;

CREATE TABLE `dependencias` (
  `DE_ID` int(10) NOT NULL,
  `DE_Dependencia` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `dependencias`
--

INSERT INTO `dependencias` (`DE_ID`, `DE_Dependencia`) VALUES
(1, 'Biblioteca de Ciencias del Mar'),
(2, 'Biblioteca de Comercio'),
(3, 'Biblioteca Lic. Ernesto Camacho Quiñones'),
(4, 'Biblioteca de Ciencias Agropecuarias'),
(5, 'Biblioteca de los bachilleratos 5, 6 y 20'),
(6, 'Biblioteca de Ciencias Miguel de la Madrid Hurtado'),
(7, 'Biblioteca de Ciencias Sociales'),
(8, 'Biblioteca del área de la salud'),
(9, 'Biblioteca IUBA'),
(10, 'Biblioteca Pinacoteca'),
(11, 'Biblioteca Albarrada Bachilleratos 15 y 30'),
(12, 'Biblioteca Cóbano'),
(13, 'Biblioteca de Ciencias Aplicadas'),
(14, 'Biblioteca de Humanidades'),
(15, 'Biblioteca de los bachilleratos 4 y 16'),
(16, 'Biblioteca del bachillerato 17 y 25'),
(17, 'Biblioteca Nogueras'),
(18, 'Biblioteca de Ciencias Políticas y Jurídicas'),
(19, 'Biblioteca Bachillerato 32'),
(20, 'Biblioteca de los bachilleratos 12 y 13'),
(21, 'Biblioteca de bachillerato 7 y 21'),
(22, 'Biblioteca de Bachillerato 14 '),
(23, 'Biblioteca del Bachillerato Santiago'),
(24, 'Biblioteca Comercio y Nutrición');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiquetas`
--

CREATE TABLE `etiquetas` (
  `ET_ID` int(10) NOT NULL,
  `ET_Etiqueta` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `etiquetas`
--

INSERT INTO `etiquetas` (`ET_ID`, `ET_Etiqueta`) VALUES
(1, 'Asignado'),
(2, 'Tomado'),
(3, 'Respondido por bibliotecario'),
(4, 'Respondido por usuario'),
(5, 'Transferido'),
(6, 'Reasignado'),
(7, 'Reabierto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logs`
--

CREATE TABLE `logs` (
  `lo_id` int(10) NOT NULL,
  `lo_fecha` datetime NOT NULL,
  `lo_comentario` text NOT NULL,
  `lo_status` int(10) DEFAULT NULL,
  `lo_etiqueta` int(10) NOT NULL,
  `lo_ticket` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `logs`
--

INSERT INTO `logs` (`lo_id`, `lo_fecha`, `lo_comentario`, `lo_status`, `lo_etiqueta`, `lo_ticket`) VALUES
(1, '2017-11-15 01:34:27', 'comentario', 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `me_id` int(10) NOT NULL,
  `me_ticket` int(10) NOT NULL,
  `me_usuario` int(10) NOT NULL,
  `me_fecha` datetime NOT NULL,
  `me_contenido` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`me_id`, `me_ticket`, `me_usuario`, `me_fecha`, `me_contenido`) VALUES
(1, 1, 1, '2017-11-14 20:04:54', 'qué pedo compa, ya me van a atender o queso babas'),
(3, 4, 3, '2017-11-14 20:08:31', 'Y por el culo alv compa'),
(4, 4, 3, '2017-11-14 20:08:38', '2weqweqwew'),
(5, 4, 3, '2017-11-14 20:33:51', 'qqqq'),
(6, 4, 3, '2017-11-14 20:33:54', 'qweqwe'),
(7, 4, 3, '2017-11-14 20:33:56', 'eeee'),
(8, 4, 6, '2017-11-15 11:04:33', 'A mí también me gusta cogérmelo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `RO_ID` int(10) NOT NULL,
  `RO_Rol` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`RO_ID`, `RO_Rol`) VALUES
(1, 'Universitario'),
(2, 'Responsable'),
(3, 'Bibliotecario'),
(4, 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status`
--

CREATE TABLE `status` (
  `ST_ID` int(10) NOT NULL,
  `ST_Status` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `status`
--

INSERT INTO `status` (`ST_ID`, `ST_Status`) VALUES
(1, 'Nuevo'),
(2, 'En proceso'),
(3, 'Cerrado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tickets`
--

CREATE TABLE `tickets` (
  `TI_Folio` int(10) NOT NULL,
  `TI_Fecha_Hora_Alta` datetime NOT NULL,
  `TI_Peticion` text NOT NULL,
  `TI_Init` text NOT NULL,
  `TI_Fecha_Hora_Cierre` datetime DEFAULT NULL,
  `TI_Calificacion` tinyint(5) DEFAULT NULL,
  `TI_Status` int(10) NOT NULL,
  `TI_Usuario_Solicitante` int(10) NOT NULL,
  `TI_Usuario_Bibliotecario` int(10) DEFAULT NULL,
  `TI_Biblioteca` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tickets`
--

INSERT INTO `tickets` (`TI_Folio`, `TI_Fecha_Hora_Alta`, `TI_Peticion`, `TI_Init`, `TI_Fecha_Hora_Cierre`, `TI_Calificacion`, `TI_Status`, `TI_Usuario_Solicitante`, `TI_Usuario_Bibliotecario`, `TI_Biblioteca`) VALUES
(1, '2017-11-14 20:04:54', 'send nudes', '', NULL, NULL, 1, 1, NULL, NULL),
(2, '2017-11-14 20:04:54', 'holy macarroni', '', NULL, NULL, 2, 1, NULL, 10),
(3, '2017-11-14 20:04:54', 'mientras tenga hoyo aunque sea de pollo', '', NULL, NULL, 1, 1, NULL, 10),
(4, '2017-11-14 20:07:23', 'Me gusta cogerme a Ramón', 'Duro y tupido.', NULL, 4, 3, 3, NULL, NULL),
(5, '2017-11-14 20:07:38', 'This shit is working now', 'No fue necesario explicar más a fondo.', NULL, 2, 1, 3, NULL, NULL),
(6, '2017-11-14 20:08:08', 'Orlando se va a pichar la peda', 'Y unos pizzillas también alv', NULL, 2, 3, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `US_ID` int(10) NOT NULL,
  `US_Nombre` varchar(50) NOT NULL,
  `US_Correo` varchar(50) NOT NULL,
  `US_Pass` varchar(50) NOT NULL,
  `US_Rol` int(10) NOT NULL,
  `US_Dependencia` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`US_ID`, `US_Nombre`, `US_Correo`, `US_Pass`, `US_Rol`, `US_Dependencia`) VALUES
(1, 'Fernando Ceballos', 'correo@ucol.mx', '1234', 1, 1),
(2, 'Señor Bibliotecario ', 'biblio@ucol.mx', '1234', 3, 1),
(3, 'Fernando', 'ceballos@ucol.mx', '1234', 1, 1),
(4, 'Fernando', 'ceballos@ucol.mx', '1234', 1, 1),
(5, 'Don Admin', 'admin@ucol.mx', '1234', 4, 1),
(6, 'Don Responsable', 'respo@ucol.mx', '1234', 2, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dependencias`
--
ALTER TABLE `dependencias`
  ADD PRIMARY KEY (`DE_ID`);

--
-- Indices de la tabla `etiquetas`
--
ALTER TABLE `etiquetas`
  ADD PRIMARY KEY (`ET_ID`);

--
-- Indices de la tabla `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`lo_id`),
  ADD KEY `fk_movimientos_Status` (`lo_status`),
  ADD KEY `fk_movimientos_Etiqueta` (`lo_etiqueta`),
  ADD KEY `fk_movimientos_Ticket` (`lo_ticket`);

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`me_id`),
  ADD KEY `fk_me_tickets` (`me_ticket`),
  ADD KEY `fk_me_usuario` (`me_usuario`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`RO_ID`);

--
-- Indices de la tabla `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`ST_ID`);

--
-- Indices de la tabla `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`TI_Folio`),
  ADD KEY `fk_ticket_status` (`TI_Status`),
  ADD KEY `fk_ticket_usuario` (`TI_Usuario_Solicitante`),
  ADD KEY `fk_ticket_bibliotecario` (`TI_Usuario_Bibliotecario`),
  ADD KEY `fk_ticket_biblioteca` (`TI_Biblioteca`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`US_ID`),
  ADD KEY `fk_Usuario_Rol` (`US_Rol`),
  ADD KEY `fk_Usuario_Dependencia` (`US_Dependencia`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `dependencias`
--
ALTER TABLE `dependencias`
  MODIFY `DE_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `etiquetas`
--
ALTER TABLE `etiquetas`
  MODIFY `ET_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `logs`
--
ALTER TABLE `logs`
  MODIFY `lo_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `me_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `RO_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `status`
--
ALTER TABLE `status`
  MODIFY `ST_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tickets`
--
ALTER TABLE `tickets`
  MODIFY `TI_Folio` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `US_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `logs`
--
ALTER TABLE `logs`
  ADD CONSTRAINT `fk_movimientos_Etiqueta` FOREIGN KEY (`lo_etiqueta`) REFERENCES `etiquetas` (`ET_ID`),
  ADD CONSTRAINT `fk_movimientos_Status` FOREIGN KEY (`lo_status`) REFERENCES `status` (`ST_ID`),
  ADD CONSTRAINT `fk_movimientos_Ticket` FOREIGN KEY (`lo_ticket`) REFERENCES `tickets` (`TI_Folio`);

--
-- Filtros para la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD CONSTRAINT `fk_me_tickets` FOREIGN KEY (`me_ticket`) REFERENCES `tickets` (`TI_Folio`),
  ADD CONSTRAINT `fk_me_usuario` FOREIGN KEY (`me_usuario`) REFERENCES `usuarios` (`US_ID`);

--
-- Filtros para la tabla `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `fk_ticket_biblioteca` FOREIGN KEY (`TI_Biblioteca`) REFERENCES `dependencias` (`DE_ID`),
  ADD CONSTRAINT `fk_ticket_bibliotecario` FOREIGN KEY (`TI_Usuario_Bibliotecario`) REFERENCES `usuarios` (`US_ID`),
  ADD CONSTRAINT `fk_ticket_status` FOREIGN KEY (`TI_Status`) REFERENCES `status` (`ST_ID`),
  ADD CONSTRAINT `fk_ticket_usuario` FOREIGN KEY (`TI_Usuario_Solicitante`) REFERENCES `usuarios` (`US_ID`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_Usuario_Dependencia` FOREIGN KEY (`US_Dependencia`) REFERENCES `dependencias` (`DE_ID`),
  ADD CONSTRAINT `fk_Usuario_Rol` FOREIGN KEY (`US_Rol`) REFERENCES `roles` (`RO_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
