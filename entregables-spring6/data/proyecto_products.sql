-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: proyecto
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Ruculas',8000,5,0,'/images/Pizza-img6.jpg','Una exquisita combinación de muzzarella fundida, tomate cherrys gratinados y rucula',2,'2024-05-01 03:36:44','2024-05-01 03:36:44'),(2,'Napolitana',5000,0,1,'/images/pizza-napo.jpg','Una exquisita combinación de muzzarella fundida, tomates maserados en aceite y ajo más oregano',2,'2024-05-01 03:36:44','2024-05-01 03:36:44'),(3,'Muzzarela y Jamón',4500,0,1,'/images/Pizza-Muzza-jamon.jpg','Una exquisita combinación de muzzarella fundida con el plus del mejor jamón',2,'2024-05-01 03:36:44','2024-05-01 03:36:44'),(4,'Calabresa',4500,0,1,'/images/Pizza-Calabresa.jpg','Una exquisita combinación de muzzarella fundida con el mejor milan ',2,'2024-05-01 03:36:44','2024-05-01 03:36:44'),(5,'Muzzarella',3800,0,0,'/images/Pizza-muzza.jpg','Una exquisita combinación de muzzarella fundida, oregano y aceitunas',2,'2024-05-01 03:36:44','2024-05-01 03:36:44'),(6,'Clasica',3800,0,0,'/images/img-1710473828360.avif','El más delicioso medallon de carne vacuna con los sabores del queso fundido, lechuga y tomate frescos',3,'2024-05-01 03:36:44','2024-05-01 03:36:44'),(7,'Clasica cheddar',4200,10,0,'/images/img-1710475785419.jpg','El más delicioso medallon de carne vacuna con los sabores del queso cheddar fundido, lechuga y tomate frescos',3,'2024-05-01 03:36:44','2024-05-01 03:36:44'),(8,'Clasica completa',5000,5,0,'/images/img-1710476415772.jpg','El más delicioso medallon de carne vacuna con los sabores del queso fundido, beccon, jamón y lechuga y tomate frescos',3,'2024-05-01 03:36:44','2024-05-01 03:36:44'),(9,'Extra Completa',5800,5,0,'/images/img-1710476187246.jpg','Doble medallon de carne vacuna de los más deliciosos con los sabores del queso cheddar fundido, lechuga y tomate y cebolla frescos',3,'2024-05-01 03:36:44','2024-05-01 03:36:44'),(10,'Clasicas',3000,0,1,'/images/Papas-1.png','Crujientes y sabrozas papas fritas combinadas con queso cheddar',1,'2024-05-01 03:36:44','2024-05-01 03:36:44'),(11,'Clasicas baccon',3500,0,1,'/images/Papas-2.png','Crujientes y sabrozas papas fritas combinadas con queso cheddar y baccon',1,'2024-05-01 03:36:44','2024-05-01 03:36:44'),(12,'Clasicas Cebolla',4000,0,0,'/images/img-1710477660719.jpg','Crujientes y sabrozas papas fritas combinadas con salsa blanca, rucula y cebolla',1,'2024-05-01 03:36:44','2024-05-01 03:36:44'),(13,'Hamburguesa Vegana',5000,0,1,'/images/img-1710476722534.jpg','Exquisita hamburguesa vegana de soja y lenteja con lechuga, tomate y pan de papa',3,'2024-05-01 03:36:44','2024-05-01 03:36:44');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-02 18:50:50
