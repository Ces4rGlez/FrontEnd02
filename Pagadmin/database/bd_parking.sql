CREATE DATABASE bd_parking;

CREATE TABLE `tbl_clientes` (
  `IdUser` int(10) NOT NULL AUTO_INCREMENT,
  `emailUser` varchar(50) DEFAULT NULL,
  `passwordUser` varchar(250) DEFAULT NULL,
  `nombre_completo` varchar(250) DEFAULT NULL,
  `din` char(50) DEFAULT NULL,
  `direccion_completa` mediumtext DEFAULT NULL,
  `tlf` varchar(20) DEFAULT NULL,
  `conocido_por` varchar(60) DEFAULT NULL,
  `observaciones` mediumtext DEFAULT NULL,
  `terminos` int(11) DEFAULT 1,
  `rol` int(11) DEFAULT 0,
  `sesionDesde` varchar(30) DEFAULT NULL,
  `sesionHasta` varchar(30) DEFAULT NULL,
  `createUser` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`IdUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

LOCK TABLES `tbl_clientes` WRITE;

0 ALTER TABLE `tbl_clientes` ENABLE KEYS */;
UNLOCK TABLES;



CREATE TABLE `tbl_parking_aire_libre` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `dia` int(11) NOT NULL,
  `valor` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `tbl_parking_aire_libre` WRITE;

INSERT INTO `tbl_parking_aire_libre` (`id`, `dia`, `valor`)
VALUES
	(1,1,15.00),
	(2,2,20.00),
	(3,3,25.00),
	(4,4,29.00),
	(5,5,32.00),
	(6,6,35.00),
	(7,7,36.50),
	(8,8,38.00),
	(9,9,39.50),
	(10,10,41.00),


UNLOCK TABLES;



CREATE TABLE `tbl_parking_cubierto` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `dia` int(11) NOT NULL,
  `valor` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `tbl_parking_cubierto` WRITE;


INSERT INTO `tbl_parking_cubierto` (`id`, `dia`, `valor`)
VALUES
	(1,1,20.00),
	(2,2,25.00),
	(3,3,30.00),
	(4,4,33.00),
	(5,5,36.00),
	(6,6,39.00),
	(7,7,41.00),
	(8,8,43.00),
	(9,9,45.00),
	(10,10,47.00),

UNLOCK TABLES;



CREATE TABLE `tbl_reservas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) DEFAULT NULL,
  `fecha_entrega` date NOT NULL,
  `hora_entrega` time NOT NULL,
  `fecha_recogida` varchar(50) DEFAULT NULL,
  `hora_recogida` varchar(50) DEFAULT NULL,
  `tipo_plaza` varchar(100) DEFAULT '',
  `terminal_entrega` varchar(100) DEFAULT '',
  `terminal_recogida` varchar(100) DEFAULT '',
  `matricula` varchar(50) DEFAULT '',
  `color` varchar(60) DEFAULT NULL,
  `marca_modelo` varchar(250) DEFAULT '',
  `numero_vuelo_de_vuelta` varchar(50) DEFAULT NULL,
  `servicio_adicional` varchar(10) DEFAULT NULL,
  `total_dias_reserva` int(11) DEFAULT NULL,
  `total_pago_reserva` decimal(8,2) DEFAULT NULL,
  `descuento` bigint(11) DEFAULT 0,
  `formato_pago` varchar(250) DEFAULT NULL,
  `observacion_cliente` mediumtext DEFAULT NULL,
  `fecha_pago_factura` date DEFAULT NULL,
  `servicios_extras` mediumtext DEFAULT NULL,
  `total_gasto_extras` decimal(8,2) DEFAULT NULL,
  `estado_reserva` int(11) DEFAULT 0,
  `date_registro` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `tbl_reservas` WRITE;


INSERT INTO `tbl_reservas` (`id`, `id_cliente`, `fecha_entrega`, `hora_entrega`, `fecha_recogida`, `hora_recogida`, `tipo_plaza`, `terminal_entrega`, `terminal_recogida`, `matricula`, `color`, `marca_modelo`, `numero_vuelo_de_vuelta`, `servicio_adicional`, `total_dias_reserva`, `total_pago_reserva`, `descuento`, `formato_pago`, `observacion_cliente`, `fecha_pago_factura`, `servicios_extras`, `total_gasto_extras`, `estado_reserva`, `date_registro`)
VALUES
	(1,22,'2024-01-16','06:15:00','2024-01-26','05:45','Plaza Cubierto','Puerta1','Puerta2','m','c','m','v','Si',NULL,47.00,0,'Tarjeta Bancaria',NULL,'2024-01-18','Ninguno',0.00,1,'2024-01-17 19:03:15'),
	(2,22,'2024-01-16','06:15:00','2024-01-25','07:00','Plaza Aire Libre','Puerta1','Puerta1','m','c','mm','54645','Si',NULL,51.50,0,'Pago con Tarjeta de Crédito/Débito',NULL,'2024-01-15','Ninguno',12.00,2,'2024-01-17 19:05:59'),
	(3,21,'2024-01-15','05:45:00','2024-01-16','06:00','Plaza Cubierto','434','434','343','3434','34','34','No',NULL,20.00,0,NULL,NULL,NULL,'434',34.00,0,'2024-01-14 18:15:37'),
	(4,22,'2024-01-18','05:30:00','2024-01-24','06:45','Plaza Cubierto','t','t','t','t','t','yt','No',NULL,39.00,0,NULL,NULL,NULL,'Ninguno',NULL,0,'2024-01-17 18:54:39'),
	(5,22,'2024-01-23','06:15:00','2024-01-24','06:15','Plaza Cubierto','tr','t','ttr','546','trt','rtr','No',NULL,20.00,0,NULL,NULL,NULL,'Ninguno',0.00,0,'2024-01-17 18:56:23');


UNLOCK TABLES;


