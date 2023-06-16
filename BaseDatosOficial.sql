CREATE DATABASE  IF NOT EXISTS `emergentes` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `emergentes`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: emergentes
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `rfc` varchar(13) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(75) NOT NULL,
  `empresa` varchar(50) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  PRIMARY KEY (`rfc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES ('OOHJ020110UU3','JOSE ACTUALIZADO','OROZCO','jose@gmail.com','ITSON','6442138093'),('OOHJ020111UU4','JESUS','HERNANDEZ','jesus@gmail.com','NAINARI','6442138011');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `idempleado` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(75) NOT NULL,
  `rol` enum('ADMINISTRADOR','EMPLEADO') NOT NULL,
  `telefono` varchar(15) NOT NULL,
  PRIMARY KEY (`idempleado`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (17,'John Actualizado','Doe','johndoe@example.com','EMPLEADO','1234567890'),(18,'John Actualizado','Doe','johndoe@example.com','EMPLEADO','1234567890'),(19,'John','Doe','johndoe@example.com','EMPLEADO','1234567890'),(20,'John','Doe','johndoe@example.com','EMPLEADO','1234567890'),(21,'Jose Prueba 3','Orozco Prueba 3','joseprueba3@gmail.com','EMPLEADO','6442138099'),(23,'John prueba actualizado','Doe','johndoe@example.com','EMPLEADO','1234567890'),(24,'Jose FIN','Orozco FIN','josefin@gmail.com','EMPLEADO','2323232332'),(25,'adsd','sdsd','dsds','EMPLEADO','2323232332'),(27,'fffff','bbbbb','mmmmmmmmmm','EMPLEADO','444444444');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensajes`
--

DROP TABLE IF EXISTS `mensajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensajes` (
  `idmensaje` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `asunto` varchar(50) NOT NULL,
  `cuerpo` text NOT NULL,
  `archivo` longblob,
  `idempleado` int NOT NULL,
  `idcliente` varchar(13) NOT NULL,
  PRIMARY KEY (`idmensaje`),
  KEY `idempleado_idx` (`idempleado`),
  KEY `rfccliente_idx` (`idcliente`),
  CONSTRAINT `idcliente-fk-mensaje` FOREIGN KEY (`idcliente`) REFERENCES `clientes` (`rfc`),
  CONSTRAINT `idempleado-fk-mensaje` FOREIGN KEY (`idempleado`) REFERENCES `empleados` (`idempleado`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensajes`
--

LOCK TABLES `mensajes` WRITE;
/*!40000 ALTER TABLE `mensajes` DISABLE KEYS */;
INSERT INTO `mensajes` VALUES (1,'2022-02-12','prueba','hola',NULL,17,'OOHJ020110UU3'),(2,'2022-02-12','prueba2','dias',NULL,17,'OOHJ020110UU3'),(3,'2022-02-12','prueba 4','ddddd',NULL,23,'OOHJ020110UU3');
/*!40000 ALTER TABLE `mensajes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reportes`
--

DROP TABLE IF EXISTS `reportes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reportes` (
  `idreporte` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(25) NOT NULL,
  `idempleado` int NOT NULL,
  `idcliente` varchar(13) NOT NULL,
  PRIMARY KEY (`idreporte`),
  KEY `idempleado_idx` (`idempleado`),
  KEY `idcliente_idx` (`idcliente`),
  CONSTRAINT `idcliente-fk-reporte` FOREIGN KEY (`idcliente`) REFERENCES `clientes` (`rfc`),
  CONSTRAINT `idempleado-fk-reporte` FOREIGN KEY (`idempleado`) REFERENCES `empleados` (`idempleado`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reportes`
--

LOCK TABLES `reportes` WRITE;
/*!40000 ALTER TABLE `reportes` DISABLE KEYS */;
INSERT INTO `reportes` VALUES (1,'sdsdsdsds','2022-01-22','12',17,'OOHJ020110UU3'),(2,'3sdsd','2022-02-22','21',17,'OOHJ020110UU3');
/*!40000 ALTER TABLE `reportes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `retroalimentaciones`
--

DROP TABLE IF EXISTS `retroalimentaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `retroalimentaciones` (
  `idretroalimentacion` int NOT NULL AUTO_INCREMENT,
  `comentario` text NOT NULL,
  `fecha` date NOT NULL,
  `calificacion` int NOT NULL,
  `idempleado` int DEFAULT NULL,
  `idcliente` varchar(13) DEFAULT NULL,
  PRIMARY KEY (`idretroalimentacion`),
  KEY `idcliente-fk-retro_idx` (`idcliente`),
  KEY `idempleado-fk-retro_idx` (`idempleado`),
  CONSTRAINT `idcliente-fk-retro` FOREIGN KEY (`idcliente`) REFERENCES `clientes` (`rfc`),
  CONSTRAINT `idempleado-fk-retro` FOREIGN KEY (`idempleado`) REFERENCES `empleados` (`idempleado`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `retroalimentaciones`
--

LOCK TABLES `retroalimentaciones` WRITE;
/*!40000 ALTER TABLE `retroalimentaciones` DISABLE KEYS */;
INSERT INTO `retroalimentaciones` VALUES (1,'prueba','2022-01-12',11,17,'OOHJ020110UU3'),(2,'prueba','2022-01-12',11,17,'OOHJ020110UU3');
/*!40000 ALTER TABLE `retroalimentaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `usuario` varchar(25) NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  `idempleado` int NOT NULL,
  PRIMARY KEY (`usuario`),
  KEY `idempleado-fk_idx` (`idempleado`),
  CONSTRAINT `idempleado-fk` FOREIGN KEY (`idempleado`) REFERENCES `empleados` (`idempleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('17','17',17);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-16  1:07:00
