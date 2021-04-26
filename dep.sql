-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2021 at 10:06 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dep`
--

-- --------------------------------------------------------

--
-- Table structure for table `civil_court`
--

CREATE TABLE `civil_court` (
  `District` varchar(50) NOT NULL,
  `New Cases` int(11) NOT NULL,
  `Cases Closed` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `Year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `covid`
--

CREATE TABLE `covid` (
  `District` varchar(50) NOT NULL,
  `New Cases` int(11) NOT NULL,
  `New Deaths` int(11) NOT NULL,
  `New Recovered` int(11) NOT NULL,
  `Active Cases` int(11) NOT NULL,
  `New Vaccination` int(11) NOT NULL,
  `Month` int(11) NOT NULL,
  `Year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `criminal_court`
--

CREATE TABLE `criminal_court` (
  `District` varchar(50) NOT NULL,
  `New Cases` int(11) NOT NULL,
  `Cases Closed` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `Year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `distribution of atta`
--

CREATE TABLE `distribution of atta` (
  `year` date NOT NULL,
  `distributed atta` int(11) NOT NULL,
  `target` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `distribution of dal`
--

CREATE TABLE `distribution of dal` (
  `year` date NOT NULL,
  `dal distributed` int(11) NOT NULL,
  `target` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `enforcement of drug measures`
--

CREATE TABLE `enforcement of drug measures` (
  `month` date NOT NULL,
  `substance` varchar(32) NOT NULL,
  `schedule` int(11) NOT NULL,
  `decision` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `excise_duty_tax`
--

CREATE TABLE `excise_duty_tax` (
  `district` varchar(50) NOT NULL,
  `collection` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `excise_duty_tax`
--

INSERT INTO `excise_duty_tax` (`district`, `collection`, `month`, `year`) VALUES
('chd', 19, 4, 2021),
('ludh', 12, 5, 2020),
('pat', 24, 7, 2021);

-- --------------------------------------------------------

--
-- Table structure for table `gst`
--

CREATE TABLE `gst` (
  `district` varchar(50) NOT NULL,
  `gst_collected` int(11) NOT NULL,
  `gst_target` int(11) NOT NULL,
  `vat_collected` int(11) NOT NULL,
  `vat_target` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `motor_vehicle_tax`
--

CREATE TABLE `motor_vehicle_tax` (
  `district` varchar(50) NOT NULL,
  `fee` int(11) NOT NULL,
  `compounding fee` int(11) NOT NULL,
  `commercial cess` int(11) NOT NULL,
  `non commercial cess` int(11) NOT NULL,
  `mvt` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rehabilition`
--

CREATE TABLE `rehabilition` (
  `district` varchar(32) NOT NULL,
  `rehabilitation centers` int(11) NOT NULL,
  `total patients` int(11) NOT NULL,
  `succesful rehabs` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `stamp_duty`
--

CREATE TABLE `stamp_duty` (
  `district` varchar(50) NOT NULL,
  `collection` int(11) NOT NULL,
  `target` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `upgradation of infrastructure`
--

CREATE TABLE `upgradation of infrastructure` (
  `district` varchar(32) NOT NULL,
  `total hospital beds` int(11) NOT NULL,
  `target for next month` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vaccination_data`
--

CREATE TABLE `vaccination_data` (
  `district` varchar(32) NOT NULL,
  `doses for above 45` int(11) NOT NULL,
  `doses for between 18 and 45` int(11) NOT NULL,
  `doses for below 18` int(11) NOT NULL,
  `month` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `excise_duty_tax`
--
ALTER TABLE `excise_duty_tax`
  ADD PRIMARY KEY (`district`,`month`,`year`);

--
-- Indexes for table `gst`
--
ALTER TABLE `gst`
  ADD PRIMARY KEY (`district`,`month`,`year`);

--
-- Indexes for table `motor_vehicle_tax`
--
ALTER TABLE `motor_vehicle_tax`
  ADD PRIMARY KEY (`district`,`month`,`year`);

--
-- Indexes for table `stamp_duty`
--
ALTER TABLE `stamp_duty`
  ADD PRIMARY KEY (`district`,`month`,`year`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
