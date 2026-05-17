-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           9.5.0 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.14.0.7165
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para loja
DROP DATABASE IF EXISTS `loja`;
CREATE DATABASE IF NOT EXISTS `loja` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `loja`;

-- Copiando estrutura para tabela loja.produtos
DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL DEFAULT '0',
  `preco` double NOT NULL DEFAULT (0),
  `imagem` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela loja.produtos: ~17 rows (aproximadamente)
DELETE FROM `produtos`;
INSERT INTO `produtos` (`id`, `nome`, `preco`, `imagem`) VALUES
	(1, 'Civic Type R', 430500, 'Civic Type R.png'),
	(2, 'CB500 Hornet', 45000, 'CB500 Hornet.png'),
	(3, 'Honda HR-V', 214000, 'Honda HR-V.png'),
	(4, 'Honda CG160 Titan', 23000, 'CG160 Titan.png'),
	(5, 'Honda Accord', 333000, 'Accord.png'),
	(6, 'Pop110i ES', 11000, 'Pop110i ES.png'),
	(7, 'Honda Civic Sedan', 265900, 'Civic Sedan.png'),
	(8, 'Honda CR-V Advanced', 352900, 'CR-V.png'),
	(9, 'CB 1000R Black Edition', 87730, 'CB 1000R.png'),
	(10, 'Honda XRE 300 Sahara', 27000, 'XRE 300.png'),
	(11, 'Honda Biz 125', 14970, 'Biz 125.png'),
	(12, 'Honda CRF 1100L Africa Twin', 81100, 'Africa Twin.png'),
	(13, 'Honda Civic Type R (2024)', 440000, 'Civic Type R 2024.png'),
	(14, 'Honda City Hatchback', 13000, 'City Hatch.png'),
	(15, 'Honda GL 1800 Gold Wing', 304450, 'Gold Wing.png'),
	(16, 'Honda ADV 150', 23060, 'ADV 150.png'),
	(17, 'Honda NC 750X DCT', 58346, 'NC 750X.png');

-- Copiando estrutura para tabela loja.usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `telefone` varchar(50) NOT NULL DEFAULT '',
  `cpf` varchar(50) NOT NULL DEFAULT '',
  `email` varchar(50) NOT NULL DEFAULT '',
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome_usuario` (`nome`) USING BTREE,
  UNIQUE KEY `cpf` (`cpf`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela loja.usuarios: ~5 rows (aproximadamente)
DELETE FROM `usuarios`;
INSERT INTO `usuarios` (`id`, `nome`, `telefone`, `cpf`, `email`, `senha`) VALUES
	(29, '', '', '', '', '1'),
	(31, 'i', '1', '1', '1', '1'),
	(34, 'i546', '156', '165', '1@16', '1'),
	(35, 'ismael', '12121', '212121', 'isamel@122', '12345'),
	(36, 'ismael 12', '35432425', '25443543', 'q@1', '123');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
