-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2021 at 07:01 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

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
-- Table structure for table `excise duty tax`
--

CREATE TABLE `excise duty tax` (
  `district` varchar(50) NOT NULL,
  `collection` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Table structure for table `motor vehicle tax`
--

CREATE TABLE `motor vehicle tax` (
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
-- Table structure for table `stamp duty`
--

CREATE TABLE `stamp duty` (
  `district` varchar(50) NOT NULL,
  `collection` int(11) NOT NULL,
  `target` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `excise duty tax`
--
ALTER TABLE `excise duty tax`
  ADD PRIMARY KEY (`district`,`month`,`year`);

--
-- Indexes for table `gst`
--
ALTER TABLE `gst`
  ADD PRIMARY KEY (`district`,`month`,`year`);

--
-- Indexes for table `motor vehicle tax`
--
ALTER TABLE `motor vehicle tax`
  ADD PRIMARY KEY (`district`,`month`,`year`);

--
-- Indexes for table `stamp duty`
--
ALTER TABLE `stamp duty`
  ADD PRIMARY KEY (`district`,`month`,`year`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
