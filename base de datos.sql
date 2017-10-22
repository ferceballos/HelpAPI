CREATE DATABASE  IF NOT EXISTS `pi-7mo` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `pi-7mo`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: pi-7mo
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.25-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dependencias`
--

DROP TABLE IF EXISTS `dependencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dependencias` (
  `DE_ID` int(10) NOT NULL AUTO_INCREMENT,
  `DE_Dependencia` varchar(50) NOT NULL,
  PRIMARY KEY (`DE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dependencias`
--

LOCK TABLES `dependencias` WRITE;
/*!40000 ALTER TABLE `dependencias` DISABLE KEYS */;
/*!40000 ALTER TABLE `dependencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `etiqueta_movimiento`
--

DROP TABLE IF EXISTS `etiqueta_movimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `etiqueta_movimiento` (
  `EM_ID` int(10) NOT NULL AUTO_INCREMENT,
  `EM_Etiqueta` varchar(30) NOT NULL,
  `EM_Status` int(10) NOT NULL,
  PRIMARY KEY (`EM_ID`),
  KEY `fk_EtiquetaMovimiento_Status` (`EM_Status`),
  CONSTRAINT `fk_EtiquetaMovimiento_Status` FOREIGN KEY (`EM_Status`) REFERENCES `status` (`ST_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etiqueta_movimiento`
--

LOCK TABLES `etiqueta_movimiento` WRITE;
/*!40000 ALTER TABLE `etiqueta_movimiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `etiqueta_movimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `RO_ID` int(10) NOT NULL AUTO_INCREMENT,
  `RO_Rol` varchar(30) NOT NULL,
  PRIMARY KEY (`RO_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `ST_ID` int(10) NOT NULL AUTO_INCREMENT,
  `ST_Status` varchar(30) NOT NULL,
  PRIMARY KEY (`ST_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ticket` (
  `TI_Folio` int(10) NOT NULL AUTO_INCREMENT,
  `TI_Fecha_Hora_Alta` datetime NOT NULL,
  `TI_Peticion` text NOT NULL,
  `TI_Fecha_Hora_Cierre` datetime NOT NULL,
  `TI_Calificacion` tinyint(5) NOT NULL,
  `TI_Status` int(10) NOT NULL,
  `TI_Usuario_Solicitante` int(10) NOT NULL,
  PRIMARY KEY (`TI_Folio`),
  KEY `fk_ticket_usuario` (`TI_Usuario_Solicitante`),
  KEY `fk_ticket_status` (`TI_Status`),
  CONSTRAINT `fk_ticket_status` FOREIGN KEY (`TI_Status`) REFERENCES `status` (`ST_ID`),
  CONSTRAINT `fk_ticket_usuario` FOREIGN KEY (`TI_Usuario_Solicitante`) REFERENCES `usuarios` (`US_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_tickets_movimiento`
--

DROP TABLE IF EXISTS `usuarios_tickets_movimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios_tickets_movimiento` (
  `UT_ID` int(10) NOT NULL AUTO_INCREMENT,
  `UT_Fecha_Hora_Movimiento` datetime NOT NULL,
  `UT_Comentario` text NOT NULL,
  `UT_Etiqueta_Movimiento` int(10) NOT NULL,
  `UT_Usuario` int(10) NOT NULL,
  `UT_Ticket` int(10) NOT NULL,
  PRIMARY KEY (`UT_ID`),
  KEY `fk_movimientos_EtiquetaMovimiento` (`UT_Etiqueta_Movimiento`),
  KEY `fk_movimientos_Usuario` (`UT_Usuario`),
  KEY `fk_movimientos_Ticket` (`UT_Ticket`),
  CONSTRAINT `fk_movimientos_EtiquetaMovimiento` FOREIGN KEY (`UT_Etiqueta_Movimiento`) REFERENCES `etiqueta_movimiento` (`EM_ID`),
  CONSTRAINT `fk_movimientos_Ticket` FOREIGN KEY (`UT_Ticket`) REFERENCES `ticket` (`TI_Folio`),
  CONSTRAINT `fk_movimientos_Usuario` FOREIGN KEY (`UT_Usuario`) REFERENCES `usuarios` (`US_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_tickets_movimiento`
--

LOCK TABLES `usuarios_tickets_movimiento` WRITE;
/*!40000 ALTER TABLE `usuarios_tickets_movimiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios_tickets_movimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'pi-7mo'
--

--
-- Dumping routines for database 'pi-7mo'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-03 22:39:16
