-- MariaDB dump 10.19  Distrib 10.4.20-MariaDB, for Linux (x86_64)
--
-- Host: classmysql.engr.oregonstate.edu    Database: cs340_peifferp
-- ------------------------------------------------------
-- Server version	10.4.21-MariaDB-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CallLogs`
--

DROP TABLE IF EXISTS `CallLogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CallLogs` (
  `callID` int(11) NOT NULL AUTO_INCREMENT,
  `shiftID` int(11) NOT NULL,
  `dispatcherID` int(11) NOT NULL,
  `callTimeStamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `responseType` enum('Fire','Medic','Police') NOT NULL,
  `callerFirstName` varchar(255) NOT NULL,
  `callerLastName` varchar(255) NOT NULL,
  `chiefComplaint` varchar(800) DEFAULT NULL,
  `areaCode` char(3) NOT NULL,
  `phoneNumber` char(7) NOT NULL,
  `streetAddress` varchar(255) NOT NULL,
  `zipCode` char(5) NOT NULL,
  `phoneNotes` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`callID`),
  KEY `shiftID` (`shiftID`),
  KEY `dispatcherID` (`dispatcherID`),
  CONSTRAINT `CallLogs_ibfk_1` FOREIGN KEY (`shiftID`) REFERENCES `Shifts` (`shiftID`),
  CONSTRAINT `CallLogs_ibfk_2` FOREIGN KEY (`dispatcherID`) REFERENCES `EmergencyResponseEmployees` (`employeeID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CallLogs`
--

LOCK TABLES `CallLogs` WRITE;
/*!40000 ALTER TABLE `CallLogs` DISABLE KEYS */;
INSERT INTO `CallLogs` VALUES (1,1,6,'2006-01-03 08:00:00','Fire','Good','Samaritan','Northern Hotel is on fire, 4th Floor','406','5555559','19 N Broadway','59101','Evacuation underway'),(2,6,6,'2006-01-03 08:00:00','Medic','Some','Bystander','Chest pain','406','5555510','570 S 24th St','59101','AED on site'),(3,9,6,'2006-01-03 08:00:00','Police','Billy','Joel','Robbed at gunpoint downtown','895','5555511','109 N Broadway','59101','Suspect fled on foot towards St. Vincents'),(4,8,5,'2006-01-03 08:00:00','Fire','John','Wayne','Small fire in Daisy Dukes','406','5555512','222 N Broadway','59101',''),(5,6,5,'2006-01-03 08:00:00','Medic','Clint','Eastwood','Gunshot wound to thigh','406','5555513','1123 1st Ave N','59101','Tourniquet applied');
/*!40000 ALTER TABLE `CallLogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EmergencyResponseEmployees`
--

DROP TABLE IF EXISTS `EmergencyResponseEmployees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EmergencyResponseEmployees` (
  `employeeID` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `role` enum('EMT','Driver','Paramedic','Dispatcher') NOT NULL,
  `compensationRate` decimal(5,2) NOT NULL,
  `areaCode` char(3) NOT NULL,
  `phoneNumber` char(7) NOT NULL,
  `employeeEmail` varchar(255) NOT NULL,
  PRIMARY KEY (`employeeID`),
  UNIQUE KEY `phoneNumber` (`phoneNumber`),
  UNIQUE KEY `employeeEmail` (`employeeEmail`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EmergencyResponseEmployees`
--

LOCK TABLES `EmergencyResponseEmployees` WRITE;
/*!40000 ALTER TABLE `EmergencyResponseEmployees` DISABLE KEYS */;
INSERT INTO `EmergencyResponseEmployees` VALUES (1,'Philip','Peiffer','EMT',22.15,'406','5555555','fakeemail1@noemail.com'),(2,'Jadon','Procter','Driver',23.45,'406','5555556','fakeemail2@noemail.com'),(3,'Sundance','Kid','Paramedic',22.45,'406','5555557','fakeemail3@noemail.com'),(4,'Butch','Cassidy','Driver',44.05,'406','5555600','fakeemail4@noemail.com'),(5,'Wyatt','Earp','Dispatcher',19.00,'406','5555601','fakeemail5@noemail.com'),(6,'Herby','Hankok','Dispatcher',123.45,'406','5555602','fakeemail6@noemail.com');
/*!40000 ALTER TABLE `EmergencyResponseEmployees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EmployeeShifts`
--

DROP TABLE IF EXISTS `EmployeeShifts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EmployeeShifts` (
  `employeeID` int(11) NOT NULL,
  `shiftID` int(11) NOT NULL,
  PRIMARY KEY (`employeeID`,`shiftID`),
  KEY `shiftID` (`shiftID`),
  CONSTRAINT `EmployeeShifts_ibfk_1` FOREIGN KEY (`employeeID`) REFERENCES `EmergencyResponseEmployees` (`employeeID`) ON DELETE CASCADE,
  CONSTRAINT `EmployeeShifts_ibfk_2` FOREIGN KEY (`shiftID`) REFERENCES `Shifts` (`shiftID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EmployeeShifts`
--

LOCK TABLES `EmployeeShifts` WRITE;
/*!40000 ALTER TABLE `EmployeeShifts` DISABLE KEYS */;
INSERT INTO `EmployeeShifts` VALUES (1,1),(1,3),(1,5),(1,7),(1,9),(2,2),(2,4),(2,6),(2,8),(2,10),(3,2),(3,4),(3,6),(3,8),(4,1),(4,7),(4,9),(5,2),(5,10),(6,1),(6,2),(6,4);
/*!40000 ALTER TABLE `EmployeeShifts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ReportEmployees`
--

DROP TABLE IF EXISTS `ReportEmployees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ReportEmployees` (
  `employeeID` int(11) NOT NULL,
  `reportID` int(11) NOT NULL,
  PRIMARY KEY (`employeeID`,`reportID`),
  KEY `reportID` (`reportID`),
  CONSTRAINT `ReportEmployees_ibfk_1` FOREIGN KEY (`employeeID`) REFERENCES `EmergencyResponseEmployees` (`employeeID`) ON DELETE CASCADE,
  CONSTRAINT `ReportEmployees_ibfk_2` FOREIGN KEY (`reportID`) REFERENCES `Reports` (`reportID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ReportEmployees`
--

LOCK TABLES `ReportEmployees` WRITE;
/*!40000 ALTER TABLE `ReportEmployees` DISABLE KEYS */;
INSERT INTO `ReportEmployees` VALUES (1,1),(1,2),(1,3),(2,2),(2,3),(2,5),(3,3),(3,4),(3,5),(4,1),(4,4),(4,5),(5,1),(5,2),(5,3),(6,1),(6,2),(6,3),(6,4),(6,5);
/*!40000 ALTER TABLE `ReportEmployees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reports`
--

DROP TABLE IF EXISTS `Reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Reports` (
  `reportID` int(11) NOT NULL AUTO_INCREMENT,
  `shiftID` int(11) NOT NULL,
  `callID` int(11) DEFAULT NULL,
  `authorID` int(11) NOT NULL,
  `reportTimeStamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `patientFirstName` varchar(255) NOT NULL,
  `patientLastName` varchar(255) NOT NULL,
  `patientGender` enum('Male','Female') NOT NULL,
  `patientAge` int(11) NOT NULL,
  `medicationAdministered` tinyint(1) NOT NULL DEFAULT 0,
  `incidentDescription` text NOT NULL,
  PRIMARY KEY (`reportID`),
  KEY `shiftID` (`shiftID`),
  KEY `callID` (`callID`),
  KEY `authorID` (`authorID`),
  CONSTRAINT `Reports_ibfk_1` FOREIGN KEY (`shiftID`) REFERENCES `Shifts` (`shiftID`),
  CONSTRAINT `Reports_ibfk_2` FOREIGN KEY (`callID`) REFERENCES `CallLogs` (`callID`),
  CONSTRAINT `Reports_ibfk_3` FOREIGN KEY (`authorID`) REFERENCES `EmergencyResponseEmployees` (`employeeID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reports`
--

LOCK TABLES `Reports` WRITE;
/*!40000 ALTER TABLE `Reports` DISABLE KEYS */;
INSERT INTO `Reports` VALUES (1,1,1,3,'2006-01-03 08:00:00','Paul','Scheer','Male',1,43,'Burns from Fire while escaping an enclosed room'),(2,6,2,2,'2006-01-03 08:00:00','June','Raphael','Female',0,34,'car theft'),(3,9,3,2,'2006-01-03 08:00:00','Tom','Havaford','Male',0,23,'Robbery'),(4,8,4,3,'2006-01-03 08:00:00','Donna','Miegle','Female',1,28,'fire burns'),(5,6,5,1,'2006-01-03 08:00:00','Leslie','Knope','Female',0,33,'Some one help Leslie omg');
/*!40000 ALTER TABLE `Reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Shifts`
--

DROP TABLE IF EXISTS `Shifts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Shifts` (
  `shiftID` int(11) NOT NULL AUTO_INCREMENT,
  `shiftDate` date NOT NULL,
  `startTime` time NOT NULL,
  `endTime` time NOT NULL,
  `holidayPay` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`shiftID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Shifts`
--

LOCK TABLES `Shifts` WRITE;
/*!40000 ALTER TABLE `Shifts` DISABLE KEYS */;
INSERT INTO `Shifts` VALUES (1,'2021-11-10','06:00:00','18:00:00',0),(2,'2021-11-10','18:00:00','06:00:00',0),(3,'2021-11-11','06:00:00','18:00:00',0),(4,'2021-11-11','18:00:00','06:00:00',0),(5,'2021-11-12','06:00:00','18:00:00',0),(6,'2021-11-12','18:00:00','06:00:00',0),(7,'2021-11-13','06:00:00','18:00:00',0),(8,'2021-11-13','18:00:00','06:00:00',0),(9,'2021-11-14','06:00:00','18:00:00',0),(10,'2021-11-14','18:00:00','06:00:00',0);
/*!40000 ALTER TABLE `Shifts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-11  8:24:15
