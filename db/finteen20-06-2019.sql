-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 20 juin 2019 à 09:04
-- Version du serveur :  5.7.24
-- Version de PHP :  7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `finteen`
--

-- --------------------------------------------------------

--
-- Structure de la table `dream`
--

DROP TABLE IF EXISTS `dream`;
CREATE TABLE IF NOT EXISTS `dream` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dream_name` varchar(100) NOT NULL,
  `dream_description` varchar(100) NOT NULL,
  `dream_price` decimal(6,2) DEFAULT NULL,
  `money_avaible_for_the_dream` decimal(6,2) DEFAULT NULL,
  `saving_account_id` int(11) DEFAULT NULL,
  `kid_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `kid_id` (`kid_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `kid`
--

DROP TABLE IF EXISTS `kid`;
CREATE TABLE IF NOT EXISTS `kid` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(90) DEFAULT NULL,
  `mobile` int(20) DEFAULT NULL,
  `pseudonyme` varchar(100) NOT NULL,
  `age` date NOT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `password` varchar(80) NOT NULL,
  `iban` varchar(34) NOT NULL,
  `bic` varchar(8) DEFAULT NULL,
  `reward_points` int(11) DEFAULT NULL,
  `saving_account_id` int(11) DEFAULT NULL,
  `debit_account_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `kid`
--

INSERT INTO `kid` (`id`, `name`, `lastname`, `email`, `mobile`, `pseudonyme`, `age`, `gender`, `password`, `iban`, `bic`, `reward_points`, `saving_account_id`, `debit_account_id`, `parent_id`) VALUES
(1, 'Laura', 'Bonchard ', 'laurabonchard@gmail.com', NULL, 'laurala2006', '2006-06-12', NULL, 'lauragere06', 'FR7630001007941234567890185', NULL, NULL, NULL, NULL, NULL),
(2, 'Ben', 'Jünger Klopp', 'benjungerklopp@gmail.com', NULL, 'benliverpool2019', '2004-03-04', NULL, 'bensalah04', 'BE03310129669484', NULL, NULL, NULL, NULL, NULL);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `dream`
--
ALTER TABLE `dream`
  ADD CONSTRAINT `dream_ibfk_1` FOREIGN KEY (`kid_id`) REFERENCES `kid` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
