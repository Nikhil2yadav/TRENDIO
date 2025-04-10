-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 10, 2025 at 03:31 PM
-- Server version: 8.3.0
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
CREATE TABLE IF NOT EXISTS `address` (
  `addressid` int NOT NULL AUTO_INCREMENT,
  `Buyerid` int NOT NULL,
  `Address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `State` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `City` text NOT NULL,
  `Pincode` int NOT NULL,
  `activestatus` int NOT NULL,
  PRIMARY KEY (`addressid`),
  KEY `Buyerid` (`Buyerid`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`addressid`, `Buyerid`, `Address`, `State`, `City`, `Pincode`, `activestatus`) VALUES
(30, 42, '65 Ghanshyam Park Mora Tekra', 'Gujarat', 'Surat', 394510, 1),
(31, 45, '65 Ghanshyam Park Mora Tekra', 'Gujarat', 'Surat', 394510, 1),
(32, 42, '21 ashoknagar shiganpore road katargam surat', 'gujarat', 'surat', 385004, 1),
(33, 31, 'prime market bhulka bhavan ', 'Gujarat', 'Surat', 390045, 1),
(34, 37, '65 Ghanshyam Park Mora Tekra', 'Gujarat', 'Surat', 394510, 1),
(35, 43, '21 ashoknagar shiganpore road katargam surat', 'gujarat', 'surat', 385004, 1),
(36, 35, 'swapna srushit residency', 'Gujarat', 'bhestan', 394510, 1);

-- --------------------------------------------------------

--
-- Table structure for table `addtocart`
--

DROP TABLE IF EXISTS `addtocart`;
CREATE TABLE IF NOT EXISTS `addtocart` (
  `addtocartid` int NOT NULL AUTO_INCREMENT,
  `ProductId` int NOT NULL,
  `BuyerId` int NOT NULL,
  `date` date NOT NULL,
  `price` int NOT NULL,
  `quantity` int NOT NULL,
  `amount` int NOT NULL,
  `Size` varchar(10) NOT NULL,
  PRIMARY KEY (`addtocartid`),
  UNIQUE KEY `unique_cart` (`BuyerId`,`ProductId`,`Size`),
  KEY `ProductId` (`ProductId`)
) ENGINE=InnoDB AUTO_INCREMENT=168 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `approvedseller`
--

DROP TABLE IF EXISTS `approvedseller`;
CREATE TABLE IF NOT EXISTS `approvedseller` (
  `ApprovedsellerId` int NOT NULL AUTO_INCREMENT,
  `SellerId` int NOT NULL,
  `LoginId` int NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`ApprovedsellerId`),
  KEY `LoginId` (`LoginId`),
  KEY `SellerId` (`SellerId`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `approvedseller`
--

INSERT INTO `approvedseller` (`ApprovedsellerId`, `SellerId`, `LoginId`, `status`) VALUES
(30, 150, 3, 1),
(31, 151, 3, 1),
(32, 152, 3, 1),
(35, 155, 3, 1),
(59, 169, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `buyer`
--

DROP TABLE IF EXISTS `buyer`;
CREATE TABLE IF NOT EXISTS `buyer` (
  `BuyerId` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(70) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Number` varchar(11) NOT NULL,
  `activestatus` int NOT NULL,
  PRIMARY KEY (`BuyerId`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `buyer`
--

INSERT INTO `buyer` (`BuyerId`, `Name`, `Email`, `Password`, `Number`, `activestatus`) VALUES
(31, 'sakshi', 'sakshi@gmail.com', '123', '9099815723', 1),
(35, 'sumit', 'sumit123@gmail.com', '1234', '1234', 1),
(37, 'jitesh ', 'jitesh@gmail.com', '123', '9724835583', 1),
(42, 'rajvi', 'raju@gmail.com', '123456', '123456789', 1),
(43, 'addi', 'addi@gmail.com', '123', '1452369870', 1),
(45, 'Nikhil', 'Nikhil@gmail.com', 'nikhil', '1236547890', 1);

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
CREATE TABLE IF NOT EXISTS `feedback` (
  `feedbackid` int NOT NULL AUTO_INCREMENT,
  `BuyerId` int NOT NULL,
  `ProductId` int NOT NULL,
  `comment` text NOT NULL,
  `feedback_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `activestatus` int NOT NULL,
  PRIMARY KEY (`feedbackid`),
  KEY `Buyerid` (`BuyerId`),
  KEY `ProductId` (`ProductId`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `LoginId` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) NOT NULL,
  `Email` varchar(70) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Firstname` varchar(255) NOT NULL,
  `Lastname` varchar(255) NOT NULL,
  `number` varchar(12) NOT NULL,
  `role` varchar(10) NOT NULL,
  `activestatus` int NOT NULL,
  PRIMARY KEY (`LoginId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`LoginId`, `Username`, `Email`, `Password`, `Firstname`, `Lastname`, `number`, `role`, `activestatus`) VALUES
(3, 'Admin', 'Admin@gmail.com', 'Admin1', 'Nikhil', 'Yadav', '8799677140', 'admin', 1);

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
CREATE TABLE IF NOT EXISTS `order` (
  `orderId` int NOT NULL AUTO_INCREMENT,
  `addressid` int NOT NULL,
  `totalamount` float NOT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  `status` int NOT NULL,
  PRIMARY KEY (`orderId`),
  KEY `addressid` (`addressid`)
) ENGINE=InnoDB AUTO_INCREMENT=199 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`orderId`, `addressid`, `totalamount`, `date`, `status`) VALUES
(183, 30, 599, '2026-03-26 13:48:34', 1),
(184, 31, 3596, '2026-03-30 09:30:19', 1),
(185, 32, 1797, '2025-04-01 09:19:43', 1),
(186, 32, 2997, '2025-04-01 10:03:17', 1),
(187, 32, 2578, '2025-04-02 17:00:44', 1),
(189, 33, 1298, '2025-04-02 21:47:04', 1),
(190, 33, 399, '2025-04-10 20:44:53', 1),
(191, 33, 499, '2025-04-10 20:45:21', 1),
(192, 32, 1099, '2025-04-10 20:46:54', 1),
(193, 32, 1598, '2025-04-10 20:47:51', 1),
(194, 34, 899, '2025-04-10 20:49:17', 1),
(195, 34, 999, '2025-04-10 20:50:07', 1),
(196, 31, 1995, '2025-04-10 20:51:19', 1),
(197, 35, 1698, '2025-04-10 20:52:56', 1),
(198, 36, 3295, '2025-04-10 20:55:11', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

DROP TABLE IF EXISTS `orderdetails`;
CREATE TABLE IF NOT EXISTS `orderdetails` (
  `orderDetailId` int NOT NULL AUTO_INCREMENT,
  `orderId` int NOT NULL,
  `quantity` int NOT NULL,
  `subtotal` float NOT NULL,
  `ProductId` int NOT NULL,
  `Size` varchar(100) NOT NULL,
  `delivery_status` enum('Pending','Shipped','Out for Delivery','Delivered') NOT NULL DEFAULT 'Pending',
  `amount` float NOT NULL,
  PRIMARY KEY (`orderDetailId`),
  KEY `orderId` (`orderId`),
  KEY `ProductId` (`ProductId`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`orderDetailId`, `orderId`, `quantity`, `subtotal`, `ProductId`, `Size`, `delivery_status`, `amount`) VALUES
(82, 190, 1, 399, 151, 'M', 'Out for Delivery', 399),
(83, 191, 1, 499, 189, 'XL', 'Shipped', 499),
(84, 192, 1, 1099, 161, 'M', 'Delivered', 1099),
(85, 193, 2, 1598, 184, 'M', 'Pending', 799),
(86, 194, 1, 899, 157, 'L', 'Delivered', 899),
(87, 195, 1, 999, 185, 'L', 'Pending', 999),
(88, 196, 1, 1396, 156, 'XL', 'Shipped', 1396),
(89, 196, 1, 599, 186, 'XL', 'Out for Delivery', 599),
(90, 197, 1, 399, 158, 'S', 'Out for Delivery', 399),
(91, 197, 1, 1299, 188, 'M', 'Pending', 1299),
(92, 198, 1, 1998, 163, 'M', 'Shipped', 1998),
(93, 198, 1, 1297, 178, 'M', 'Pending', 1297);

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
CREATE TABLE IF NOT EXISTS `payments` (
  `paymentId` int NOT NULL AUTO_INCREMENT,
  `orderId` int NOT NULL,
  `BuyerId` int NOT NULL,
  `paymentMethod` varchar(50) NOT NULL,
  `transactionId` varchar(100) DEFAULT NULL,
  `amount` float NOT NULL,
  `paymentStatus` enum('Pending','Completed','Failed') DEFAULT 'Pending',
  `paymentDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `adminAmount` float NOT NULL,
  `sellerAmount` float NOT NULL,
  PRIMARY KEY (`paymentId`),
  UNIQUE KEY `transactionId` (`transactionId`),
  KEY `BuyerId` (`BuyerId`),
  KEY `orderId` (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`paymentId`, `orderId`, `BuyerId`, `paymentMethod`, `transactionId`, `amount`, `paymentStatus`, `paymentDate`, `adminAmount`, `sellerAmount`) VALUES
(49, 183, 42, 'bankTransfer', 'TXN_17429772919877', 599, 'Completed', '2025-03-26 08:21:31', 59.9, 539.1),
(50, 184, 45, 'bankTransfer', 'TXN_17433072583850', 3596, 'Completed', '2025-03-30 04:00:58', 359.6, 3236.4),
(51, 185, 42, 'bankTransfer', 'TXN_17434795813949', 1797, 'Completed', '2025-04-01 03:53:01', 179.7, 1617.3),
(52, 186, 42, 'bankTransfer', 'TXN_17434820401583', 2997, 'Completed', '2025-04-01 04:34:00', 299.7, 2697.3),
(53, 187, 42, 'bankTransfer', 'TXN_17435934548316', 2578, 'Completed', '2025-04-02 11:30:54', 257.8, 2320.2),
(54, 189, 31, 'bankTransfer', 'TXN_17436106557090', 1298, 'Completed', '2025-04-02 16:17:35', 129.8, 1168.2),
(55, 190, 31, 'bankTransfer', 'TXN_17442981041038', 399, 'Completed', '2025-04-10 15:15:04', 39.9, 359.1),
(56, 191, 31, 'creditCard', 'TXN_17442981425012', 499, 'Completed', '2025-04-10 15:15:42', 49.9, 449.1),
(57, 192, 42, 'bankTransfer', 'TXN_17442982415684', 1099, 'Completed', '2025-04-10 15:17:21', 109.9, 989.1),
(58, 193, 42, 'creditCard', 'TXN_17442982956519', 1598, 'Completed', '2025-04-10 15:18:15', 159.8, 1438.2),
(59, 194, 37, 'bankTransfer', 'TXN_17442983835782', 899, 'Completed', '2025-04-10 15:19:43', 89.9, 809.1),
(60, 195, 37, 'creditCard', 'TXN_17442984283004', 999, 'Completed', '2025-04-10 15:20:28', 99.9, 899.1),
(61, 196, 45, 'creditCard', 'TXN_17442985037689', 1995, 'Completed', '2025-04-10 15:21:43', 199.5, 1795.5),
(62, 197, 43, 'bankTransfer', 'TXN_17442985955307', 1698, 'Completed', '2025-04-10 15:23:15', 169.8, 1528.2),
(63, 198, 35, 'bankTransfer', 'TXN_17442987303986', 3295, 'Completed', '2025-04-10 15:25:30', 329.5, 2965.5);

-- --------------------------------------------------------

--
-- Table structure for table `productimages`
--

DROP TABLE IF EXISTS `productimages`;
CREATE TABLE IF NOT EXISTS `productimages` (
  `ProductImagesId` int NOT NULL AUTO_INCREMENT,
  `ProductId` int NOT NULL,
  `Image1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `image2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `image3` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `image4` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`ProductImagesId`),
  KEY `productimages_ibfk_1` (`ProductId`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `productimages`
--

INSERT INTO `productimages` (`ProductImagesId`, `ProductId`, `Image1`, `image2`, `image3`, `image4`) VALUES
(36, 151, 'product_151_1744257052_0.webp', 'product_151_1744257052_1.webp', 'product_151_1744257052_2.webp', 'product_151_1744257052_3.webp'),
(37, 152, 'product_152_1744257688_0.webp', 'product_152_1744257688_1.webp', 'product_152_1744257688_2.webp', 'product_152_1744257688_3.webp'),
(39, 154, 'product_154_1744258254_0.webp', 'product_154_1744258254_1.webp', 'product_154_1744258254_2.webp', 'product_154_1744258254_3.webp'),
(40, 155, 'product_155_1744258740_0.webp', 'product_155_1744258740_1.webp', 'product_155_1744258740_2.webp', 'product_155_1744258740_3.webp'),
(41, 156, 'product_156_1744259165_0.webp', 'product_156_1744259165_1.webp', 'product_156_1744259165_2.webp', 'product_156_1744259165_3.webp'),
(42, 157, 'product_157_1744259740_0.webp', 'product_157_1744259740_1.webp', 'product_157_1744259740_2.webp', 'product_157_1744259740_3.webp'),
(43, 158, 'product_158_1744259965_0.webp', 'product_158_1744259965_1.webp', 'product_158_1744259965_2.webp', 'product_158_1744259965_3.webp'),
(44, 159, 'product_159_1744285357_0.jpg', 'product_159_1744285357_1.jpg', 'product_159_1744285357_2.jpg', NULL),
(45, 160, 'product_160_1744285513_0.jpg', 'product_160_1744285513_1.jpg', 'product_160_1744285513_2.jpg', 'product_160_1744285513_3.jpg'),
(46, 161, 'product_161_1744286025_0.jpg', 'product_161_1744286025_1.jpg', 'product_161_1744286025_2.jpg', 'product_161_1744286025_3.jpg'),
(47, 162, 'product_162_1744286333_0.jpg', 'product_162_1744286333_1.jpg', 'product_162_1744286333_2.jpg', 'product_162_1744286333_3.jpg'),
(48, 163, 'product_163_1744286449_0.jpg', 'product_163_1744286449_1.jpg', 'product_163_1744286449_2.jpg', NULL),
(49, 164, 'product_164_1744286564_0.jpg', 'product_164_1744286564_1.jpg', 'product_164_1744286564_2.jpg', 'product_164_1744286564_3.jpg'),
(50, 165, 'product_165_1744288406_0.jpg', 'product_165_1744288406_1.jpg', 'product_165_1744288406_2.jpg', NULL),
(51, 166, 'product_166_1744288519_0.jpg', 'product_166_1744288519_1.jpg', 'product_166_1744288519_2.jpg', 'product_166_1744288519_3.jpg'),
(52, 167, 'product_167_1744288612_0.jpg', 'product_167_1744288612_1.jpg', 'product_167_1744288612_2.jpg', 'product_167_1744288612_3.jpg'),
(53, 168, 'product_168_1744288848_0.jpg', 'product_168_1744288848_1.jpg', 'product_168_1744288848_2.jpg', NULL),
(54, 169, 'product_169_1744289006_0.jpg', 'product_169_1744289006_1.jpg', 'product_169_1744289006_2.jpg', 'product_169_1744289006_3.jpg'),
(55, 170, 'product_170_1744289156_0.jpg', 'product_170_1744289156_1.jpg', 'product_170_1744289156_2.jpg', 'product_170_1744289156_3.jpg'),
(56, 171, 'product_171_1744289316_0.jpg', 'product_171_1744289316_1.jpg', 'product_171_1744289316_2.jpg', 'product_171_1744289316_3.jpg'),
(57, 172, 'product_172_1744289527_0.jpg', 'product_172_1744289527_1.jpg', 'product_172_1744289527_2.jpg', NULL),
(58, 173, 'product_173_1744290189_0.jpg', 'product_173_1744290189_1.jpg', 'product_173_1744290189_2.jpg', 'product_173_1744290189_3.jpg'),
(59, 174, 'product_174_1744290301_0.jpg', 'product_174_1744290301_1.jpg', 'product_174_1744290301_2.jpg', 'product_174_1744290301_3.jpg'),
(60, 175, 'product_175_1744290381_0.jpg', 'product_175_1744290381_1.jpg', 'product_175_1744290381_2.jpg', 'product_175_1744290381_3.jpg'),
(61, 176, 'product_176_1744290698_0.jpg', 'product_176_1744290698_1.jpg', 'product_176_1744290698_2.jpg', 'product_176_1744290698_3.jpg'),
(62, 177, 'product_177_1744290791_0.jpg', 'product_177_1744290791_1.jpg', 'product_177_1744290791_2.jpg', 'product_177_1744290791_3.jpg'),
(63, 178, 'product_178_1744295016_0.jpg', 'product_178_1744295016_1.jpg', 'product_178_1744295016_2.jpg', NULL),
(64, 179, 'product_179_1744295340_0.jpg', 'product_179_1744295340_1.jpg', 'product_179_1744295340_2.jpg', 'product_179_1744295340_3.jpg'),
(65, 180, 'product_180_1744295492_0.jpg', 'product_180_1744295492_1.jpg', 'product_180_1744295492_2.jpg', NULL),
(66, 181, 'product_181_1744295640_0.jpg', 'product_181_1744295640_1.jpg', 'product_181_1744295640_2.jpg', 'product_181_1744295640_3.jpg'),
(67, 182, 'product_182_1744295814_0.jpg', 'product_182_1744295814_1.jpg', 'product_182_1744295814_2.jpg', 'product_182_1744295814_3.jpg'),
(68, 183, 'product_183_1744295911_0.jpg', 'product_183_1744295911_1.jpg', 'product_183_1744295911_2.jpg', NULL),
(69, 184, 'product_184_1744296055_0.jpg', 'product_184_1744296055_1.jpg', 'product_184_1744296055_2.jpg', NULL),
(70, 185, 'product_185_1744296239_0.jpg', 'product_185_1744296239_1.jpg', 'product_185_1744296239_2.jpg', 'product_185_1744296239_3.jpg'),
(71, 186, 'product_186_1744296374_0.jpg', 'product_186_1744296374_1.jpg', 'product_186_1744296374_2.jpg', 'product_186_1744296374_3.jpg'),
(72, 187, 'product_187_1744296486_0.jpg', 'product_187_1744296486_1.jpg', 'product_187_1744296486_2.jpg', 'product_187_1744296486_3.jpg'),
(73, 188, 'product_188_1744296591_0.jpg', 'product_188_1744296591_1.jpg', 'product_188_1744296591_2.jpg', 'product_188_1744296591_3.jpg'),
(74, 189, 'product_189_1744296674_0.jpg', 'product_189_1744296674_1.jpg', 'product_189_1744296674_2.jpg', 'product_189_1744296674_3.jpg'),
(75, 190, 'product_190_1744297913_0.jpg', 'product_190_1744297913_1.jpg', 'product_190_1744297913_2.jpg', NULL),
(76, 191, 'product_191_1744298000_0.jpg', 'product_191_1744298000_1.jpg', 'product_191_1744298000_2.jpg', NULL),
(77, 192, 'product_192_1744298063_0.jpg', 'product_192_1744298063_1.jpg', 'product_192_1744298063_2.jpg', 'product_192_1744298063_3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `ProductId` int NOT NULL AUTO_INCREMENT,
  `SellerId` int NOT NULL,
  `ProductName` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ProductPrice` int NOT NULL,
  `producttype` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ProductDescription` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Date` date NOT NULL,
  `Gender` varchar(50) NOT NULL,
  `activestatus` int NOT NULL,
  PRIMARY KEY (`ProductId`),
  KEY `SellerId` (`SellerId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=193 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductId`, `SellerId`, `ProductName`, `ProductPrice`, `producttype`, `ProductDescription`, `Date`, `Gender`, `activestatus`) VALUES
(151, 155, 'Casual Grey Shirt', 399, 'shirt', 'This shirt boasts a modern yet classic design that seamlessly bridges the gap between casual and sophisticated. The regular fit ensures comfort without sacrificing style, making it suitable for various occasions, from casual Fridays at the office to weekend get-togethers. This design of the men\'s shirt is tastefully incorporated to make a statement without overwhelming your outfit. Choose the outfit that best complements your style.', '2025-04-10', 'Male', 1),
(152, 155, ' Men\'s Regular Fit White T-shirt', 495, 'T-Shirt', 'T-shirt in lightweight cotton jersey with a round, rib-trimmed neckline and a straight-cut hem. Regular fit for comfortable wear and a classic silhouette.', '2025-04-10', 'Male', 1),
(154, 155, 'LOV Green Botanical Design Cotton A-Line Dress', 2499, 'Dress', 'This green dress from LOV is decked with botanical designs for feminine charm. Spun from pure-cotton fabric in a flattering fit-and-flare silhouette, it includes a square neck and detachable straps. The pintuck detailing at the bodice accentuates its appeal.', '2025-04-10', 'Female', 1),
(155, 169, 'Men\'s Textured Casual Shirt', 898, 'shirt', 'Breathable Fabric: Made from lightweight Popcorn fabric, it keeps you cool and comfortable in the summer heat.\r\nClosure Type: Button; Collar Style: Spread || Wash Instruction: Handwash / Machine Wash in cold water NO BLEACH, Low iron and tumble dry on low heat\r\nSuitable for: Casual, Business Work, Date, Party, Perfect gift for families, friends and boyfriend\r\nRelaxed Fit: The regular fit is comfortable without being too tight or baggy, allowing freedom of movement.\r\nOCCASION : Men\'s casual business solid button shirt suitable for all occasions and seasons like holiday, brithday, beach, Casual, Informal Business, Work, Vacation, Date, Wedding and Travel, Classic shirts for men will make you feel handsome and elegant when you wear it.\r\n', '2025-04-10', 'Male', 1),
(156, 169, 'Men\'s Solid Deep Brown Cotton Linen Shirt', 1396, 'shirt', 'Style your wardrobe with this classic shirt! Wear it to a casual workday, party, or for a night-in with your friends - this shirt is the universal answer to \"What should I wear today?\" Style Tip: Pair this shirt with fitted jeans for a casually cool look. Add sneakers for a laid-back vibe. Or dress it up with tailored pants and loafers for a touch of sophistication.\r\n', '2025-04-10', 'Male', 1),
(157, 169, 'Wolverine: Clawed', 899, 'T-Shirt', 'From Weapon X to X-Men, Wolverine slashes his way to fashion! Designed for those who appreciate lounging around in style, these tees are a wardrobe essential. Perfect for any occasion, from casual outings to chilling at home, these tees are your new go-to\'s.\r\n\r\nStyle Tip: Pair these tees with slim-fit bottoms for a balanced look. Whether you pair them with jeans, shorts, or joggers, these tees effortlessly complement any style.', '2025-04-10', 'Male', 1),
(158, 169, 'Cotton Oversized Fit T-Shirt ', 399, 'T-Shirt', 'Material and Quality: Premium bio-washed soft and smooth skin friendly 100% cotton ,blend with high quality Acid Wash with sharp details with minimal Print which give standout and refined touch Sleeve type: Half Sleeve; Neck Type: Round Neck; Fitting type: Oversized Fit; Age Range Description: Adult; Occasion: Casual. Washing Instructions: Wash inside out, in cold water, on gentle cycle. Tumble dry low or let air dry. Do not use Fabric Softeners or Bleach. Do not dry clean. Avoid ironing on the design. Fabric: 100% Cotton, Single Jercy Knitted, Drop Shoulder Over Sized Introducing the Bee-Fits Acid Wash T-shirt, crafted from 200 GMS heavy weight 100% premium cotton for unparalleled comfort and style. This oversized fit T-shirt, in a captivating royal blue or black, features a subtle print on the front, highlighting the exceptional craftsmanship of top-quality experts in Tirupur. The unique acid wash gives it a distinctive, worn-in look, while the high-grade cotton ensures both softness and durability. For best care, machine wash gently in cold water, avoid bleach, and air dry in the shade to preserve its vibrant color and shape. Elevate your wardrobe with this high-end, effortlessly stylish piece from the renowned Home Round brand, where quality meets fashion.', '2025-04-10', 'Male', 1),
(159, 151, 'Khodal krupa BEST Designer rayon kurtis', 599, 'Kurti & pajama', 'Shop from a huge range of great kurtas and Kurtis from Ramdevent on Amazon. Pair them up with a range of Salwars, Chudidars, Pallazos, Skirts or even Jeans to complete the look.', '2025-04-10', 'Female', 1),
(160, 151, 'Embroidered Straight Kurta', 897, 'Kurti & pajama', 'Graceful and comfortable, this kurta is bound to become your go-to option. It features intricate embroidery on the sleeves and neckline, adding a touch of elegance. The three-quarter sleeves, band collar, and straight profile provide a flattering look, while the side pockets offer practical convenience without compromising style.', '2025-04-10', 'Female', 1),
(161, 151, 'Floral Printed Mandarin Collar Cotton Kurta', 1099, 'Kurti & pajama', 'Brighten up your ethnic wardrobe with this stunning A-line kurti featuring a vibrant mix of teal blue, mustard yellow, and white. Crafted from high-quality cotton fabric, this kurti offers both comfort and style for your everyday and festive wear. The bold all-over print adds a contemporary flair to the traditional silhouette, while the mandarin collar and 3/4th sleeves enhance its elegant appeal.\r\n\r\nPair it with white palazzos or leggings and statement earrings to complete your look for work, casual outings, or small gatherings. The breathable fabric ensures all-day comfort, making it a versatile piece for every season.', '2025-04-10', 'Female', 1),
(162, 151, 'Embroidered Cotton Blend Straight Kurta  (Purple)', 691, 'Kurti & pajama', 'Elevate your ethnic charm with this graceful lavender kurti adorned with intricate white thread embroidery. Tailored in a straight-cut silhouette, this kurti features a stylish notched neckline and 3/4th sleeves, perfect for creating a sophisticated and polished look. The rich embroidery work on the front and hem adds a luxurious touch, making it ideal for both casual and festive occasions.\r\n\r\nCrafted from a soft, breathable fabric, it ensures all-day comfort without compromising on style. Pair it with white trousers or palazzos and silver accessories for a timeless, elegant ensemble.', '2025-04-10', 'Female', 1),
(163, 151, 'GoSriKi Women\'s Rayon Blend Straight Printed Kurta with Pant', 1998, 'Kurti & pajama', 'Kurta Set Fabric: Rayon Blend || Kurta Set Color :- Pink\r\nStyle: Straight || Length: Calf Length || Sleeves: 3/4 Sleeves || Size Chart- Kurta-S-36 in, M-38 in , L-40 in , XL-42 in , XXL-44 in,Pant :- S-28 in, M-30 in , L-32 in, XL- 34 in , XXL- 36 in,For More Please refer to the size Chart below.\r\nThis set includes: 1 Kurta and 1 Pant|| Work :- Printed || Neck Style:- Round Neck\r\nColour Declaration : There might be slight variation in the actual color of the product due to different screen resolutions.\r\nOcassion: Traditional wear, Casual Wear, party wear, evening wear,Please Click On Brand Name \"GoSriKi\" For More Products.', '2025-04-10', 'Female', 1),
(164, 151, 'Myx Women\'s Cotton Straight Kurti', 697, 'Kurti & pajama', '\"For best experience, do not soak the product before wash\"\r\nKnee length\r\nMachine wash cold, wash dark colors separately, do not bleach, tumble dry low, warm iron\r\nMaterial: Cotton with three quarter sleeve', '2025-04-10', 'Female', 1),
(165, 155, 'LITZO Western Dresses for Women ', 1699, 'Dress', 'Dresses for Women || Western Dresses for Women || Dress for Women || Dresses', '2025-04-10', 'Female', 1),
(166, 155, 'Emwear Sexy Cowl Neck Tie-String Long Silk Dress', 999, 'Dress', 'The sleeveless design begins fitted with a plunging cleavage, and ends flared from the waist to the almost-floor. This silhouette is finished by an open back adorned with a styling strap, focusing on shape instead of patterns or colour.', '2025-04-10', 'Female', 1),
(167, 155, 'Women Floral Printed Fit & Flare Midi Dress', 1285, 'Dress', 'Orange floral print fit & flare dress\r\nShoulder Straps\r\nSleeveless, Shoulder Straps\r\nTie-up detail\r\nMidi length in flared hem\r\nGeorgette fabric', '2025-04-10', 'Female', 1),
(168, 150, 'Women Fit and Flare Green Maxi/Full Length Dress', 899, 'Dress', 'Embrace effortless elegance with our one piece dress for women, a stunning midi dress for women that combines style, comfort, and versatility. This dress for women is crafted from a premium fabric that ensures breathability and ease of movement, making it perfect for all-day wear. this dress ensures you stand out with its chic design and flattering fit. Designed as a western wear dress for women, it adds a modern flair to your wardrobe, seamlessly blending contemporary trends with timeless style. it keeps you cool and fashionable, The elegant midi length makes it suitable for a variety of occasions, Elevate your wardrobe with this essential piece that promises both fashion and functionality, ensuring you look and feel your best no matter the occasion.', '2025-04-10', 'Female', 1),
(169, 150, 'Symbol Premium Women\'s \'Desk-to-Dinner\' Fit & Flare Wrap Dress', 15999, 'Dress', 'STYLE DETAIL: A classic midi-length fit-and-flare wrap dress with stylized sleeves\r\nFIT: Designed to accentuate the waist, it gradually flares out into a fuller skirt, creating a flattering silhouette\r\nMATERIAL: 100% imported Polyester\r\nFABRIC DETAIL: Made with premium anti-static fabric for a smooth, non-clinging drape and luxurious comfort\r\nWORKMANSHIP: Refined minimalist design enhanced with side pockets, seamlessly blending elegance with practicality\r\nExperience the ultimate blend of comfort and style with this easy-to-wear one-piece dress', '2025-04-10', 'Female', 1),
(170, 169, 'GRECIILOOKS Dress for Women Stylish | One Piece Dress for Women Long |', 5998, 'Dress', 'Soft Rayon Blend Fabric: Crafted from a premium soft rayon blend, this one-piece dress for women features a stylish floral print, ideal as a beach dress for women.\r\nVersatile Styles & Lengths: Choose from one-piece dresses for women in short or maxi dress for women styles, each designed for different occasions, from casual outings to party wear.', '2025-04-10', 'Female', 1),
(171, 169, 'Women Fit and Flare Blue, Dark Blue Midi/Calf Length Dress', 2299, 'Dress', 'This Casual Dress Is Designed In Solid Color, Party, Church. Basic Short Sleeve With Keep You Warm But Also Create A Stylish Look. Perfect Calf Length Show Your Long Legs And Add More Playfulness To This Dress. An effortless dress that can be special occasions throughout the year! This dress is ready for an elegant lunch or dinner date.', '2025-04-10', 'Female', 1),
(172, 152, 'Sheetal Associates Women\'s Maxi Floral Print Crepe Regular Sleeves Cas', 5999, 'Dress', 'Step into effortless elegance with this stunning red floral printed maxi dress. Featuring a flattering smocked bodice and puffed 3/4th sleeves, this dress beautifully blends comfort with boho-chic charm. The flowy silhouette and tiered hemline add a graceful sway to your walk, making it a perfect pick for brunches, vacations, or casual outings.', '2025-04-10', 'Female', 1),
(173, 152, 'Women Regular Fit Solid Spread Collar Casual Shirt', 593, 'shirt', 'ORANGE color Regular Fit Shirt for Women, Hip length with Full Sleeve, Spread Collar Casual Woven Design Shirt made in soft and comfortable Cotton Blend Material', '2025-04-10', 'Female', 1),
(174, 152, 'Women Oversized Fit Printed Spread Collar Casual Shirt', 898, 'shirt', 'Make a bold style statement with this chic wave-striped shirt, perfect for the modern woman. Featuring an eye-catching green and cream wavy pattern, this button-down shirt brings a fresh, contemporary twist to your everyday wardrobe. The structured collar and classic fit exude sophistication, while the soft, lightweight fabric ensures all-day comfort.', '2025-04-10', 'Female', 1),
(175, 152, 'ROYALICA Women\'s Striped Regular Fit Shirt', 798, 'shirt', 'Occasion：Suitable for Office, Work, Weekend, Casual Outtings, Weekend, Dating, Vacation and Daily wear.\r\nColour Declaration : There might be slight variation in the actual color of the product due to different screen resolutions.', '2025-04-10', 'Female', 1),
(176, 150, 'Women Solid Round Neck Top', 5999, 'shirt', 'Peach Top for women\r\nSolid\r\nRegular length\r\nRound neck\r\nShort sleeves\r\nWoven\r\nButton closure', '2025-04-10', 'Female', 1),
(177, 150, 'Women Oversized Fit Printed Spread Collar Casual Shirt', 5899, 'T-Shirt', 'Style with our latest collection of Women\'s Oversized Shirts. Designed for the modern woman who values both fashion and ease, these baggy fit tops redefine casual chic. Whether you\'re lounging at home or stepping out for a casual day, these loose fit tees strike the perfect balance between comfort and style. Embrace your unique style with our roomy shirts that flatter any figure, expressing your personality effortlessly through fashion. Elevate your wardrobe, make a statement, and redefine your style with our trendy oversized Shirt.', '2025-04-10', 'Female', 1),
(178, 169, 'Casual Regular Sleeves Color Block Women Black Top', 1297, 'T-Shirt', 'This top offers a relaxed fit, making it comfortable to wear all day long. The round neck and regular sleeves add a touch of style to the overall look.', '2025-04-10', 'Female', 1),
(179, 169, 'KERI PERRY Women\'s Navy Blue Georgette Paisley Flared Western Top | Wi', 497, 'T-Shirt', 'Fits All Occasions: It Makes A Great Addition To Your Wardrobe For Festive Wear, Daily wear, Casual Wear, Office Wear Or Evening Wear With This Evergreen Design Also This Dress Makes It A Wonderful Gifting Package For Any Occasion. Great For Party, Wedding, Cocktail, Evening, Prom, Going Out, Beach, Holiday, Official And Special Occasions. Pair It With Your Favourite Heels And Necklace.', '2025-04-10', 'Female', 1),
(180, 150, 'Men Self Design Polo Neck Polycotton White T-Shirt', 597, 'T-Shirt', 'his T-Shirt Is Very Smooth and Soft Making It Comfortable to Wear During All Seasons. This Fabric Is Durable, Odorless, and Passed Through Anti-Fading Treatment Which Ensures the T-Shirt Color Is Intact Even After Repeated Washes. This Trendy Polo Tshirt Is Beautifully Crafted in Poly Cotton These Mens T Shirts with Collar Have Half Sleeves and Is Definitely a Must-Have in Your Wardrobe. Pair This Polo Cotton Tshirt for Men with Jeans for a Classic Everyday Look. This Stylish & Attractive Mens T Shirts with Collars Are Suitable for All Body Types. Best Collar Tshirt for Men. We Are Taking Care of Your Comfort, This Men Polo Tshirt Will Provide You with a Highly Comfortable Feeling When Wearing It.', '2025-04-10', 'Male', 1),
(181, 150, 'Levi\'s Men\'s 511 Slim Fit Mid Rise Jeans', 1398, 'jeans ', 'A modern slim with room to move; the 511™ Slim Fit Jean has added stretch for all-day comfort. It offers a lean look and is a great alternative to skinny jeans.\r\n', '2025-04-10', 'Male', 1),
(182, 150, 'Women Regular Fit Black Lycra Blend Trousers', 598, 'jeans ', 'Stylish & Comfortable Trouser For Women Classic Look Comfortable Material', '2025-04-10', 'Female', 1),
(183, 150, 'KATECLO Women || Bootcut Jeans for Women || Wide Leg Jeans Women || Be', 699, 'jeans ', 'Comfortable and Relaxed: Offering a relaxed fit with ample legroom, denim bell-bottom jeans provide comfort while retaining a stylish appearance. High Waist: Often designed with a higher waistline, adding to their retro aesthetic and providing a flattering fit.\r\nWomen\'s jeans are distinguished by their wide flare from the knee down, creating a distinctive silhouette.', '2025-04-10', 'Female', 1),
(184, 151, 'Chic Ice Blue Wide Leg Jeans for Women Experience and Trendy Style for', 799, 'jeans ', 'Premium Denim Fabric: Made from high-quality denim that ensures durability and a soft feel against the skin.\r\nVersatile Styling Options: Easily dressed up with blouses or dressed down with casual tees and sneakers.\r\nComfortable Fit: Designed for all-day wear, providing ample room for movement without compromising on style', '2025-04-10', 'Female', 1),
(185, 151, 'WYKDD Dark Blue Jeans Men Loose Fit Harem Pants Streetwear Denim Pants', 999, 'jeans ', 'Dark blue jeans, men\'s loose-fitting harem pants, streetwear casual hip-hop tapered.\r\nClassic denim material, comfortable and durable.\r\nThree-dimensional tailoring process, wrapping.\r\nSuitable for the four seasons of spring, summer, autumn and winter, it is an indispensable dress in the wardrobe. It has a wide range of uses and can be perfectly matched with any top.', '2025-04-10', 'Male', 1),
(186, 151, 'TAGAS Men Loose Fit Men\'s Flip Pocket Cargo || Men\'s Stylish Cotton Lo', 599, 'jeans ', 'AGAS Men Loose Fit Men\'s Flip Pocket Cargo || Men\'s Stylish Cotton Loose Fit Denim Cargo Jeans || Multi-Pocket Styling || Perfect for Casual Fashion || Comfortable Classic Men\'s Outerwear (MDJ-3) ', '2025-04-10', 'Male', 1),
(187, 152, 'Jeans for Men || Men Jeans || Stylish Jeans for Men || Men Jeans Regul', 899, 'jeans ', 'Jeans for Men || Men Jeans || Stylish Jeans for Men || Men Jeans Regular fit\r\nMaterial: Cotton Denim\r\nLength: Regular\r\nFabric: Non-Stretch', '2025-04-10', 'Male', 1),
(188, 152, 'Men\'s Jeans Men Cat Scratch Straight Leg Jeans Jeans for menNACKT', 1299, 'jeans ', 'Bold, colorful, and always comfortable Men\'s Jeans;\r\nMatch: Enjoy a handsome outfit and match these stretchy jeans with your favorite t-shirt, button-down shirt, or hoodie and hit the city in style; Designed with maximum comfort and durability in mind, these timeless men\'s relaxed jeans will take you from work to the weekend without missing a beat; Stand out and feel comfortable every day with these high-quality, durable, and smooth jeans for men', '2025-04-10', 'Male', 1),
(189, 152, 'AFT Torpedo Men Baggy Denim Jeans in Pure 100% Cotton Denim || Stretch', 499, 'jeans ', 'The Jeans is Mid to High rise waist, extra loose baggy fit, korean cute influencer style.\r\nFabrics -1. DARKGREY Colour in Stretchable Denim 100% Cotton Denim, 2. All the rest of Colors Made from stretchable soft 280 GSM Polycotton 100% Denim Cotton fabric in Colors', '2025-04-10', 'Male', 1),
(190, 152, 'Women Regular High Rise Blue Jeans', 498, 'jeans ', 'These women\'s jeans feature a solid pattern, giving them a timeless and versatile look.\r\n\r\nThe clean and distressed appearance adds an edgy vibe to your outfit, making these jeans perfect for both casual and dressy occasions.', '2025-04-10', 'Female', 1),
(191, 155, 'Levi\'s Women\'s High Rise Ribcage Wide Leg Loose Fit Jeans', 898, 'jeans ', 'Material typeCotton\r\nLengthFull\r\nStyleModern\r\nClosure typeButton\r\nOccasion typeCasual\r\nWomen\'s High Rise Ribcage Wide Leg Loose Fit Jeans', '2025-04-10', 'Female', 1),
(192, 155, 'Straight Fit Blue Jeans', 4999, 'jeans ', 'These high-rise straight jeans offer a full-length silhouette with a clean look, button and zip fly closure and classic five-pocket styling, perfect for a timeless and sophisticated look.', '2025-04-10', 'Female', 1);

-- --------------------------------------------------------

--
-- Table structure for table `productsize`
--

DROP TABLE IF EXISTS `productsize`;
CREATE TABLE IF NOT EXISTS `productsize` (
  `SizeId` int NOT NULL AUTO_INCREMENT,
  `ProductId` int NOT NULL,
  `Size` text NOT NULL,
  PRIMARY KEY (`SizeId`),
  KEY `ProductId` (`ProductId`)
) ENGINE=InnoDB AUTO_INCREMENT=240 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `productsize`
--

INSERT INTO `productsize` (`SizeId`, `ProductId`, `Size`) VALUES
(198, 151, 'S,M,L,XL,XXL'),
(199, 152, 'S,M,L,XL'),
(201, 154, 'S,M,L,XL,XXL'),
(202, 155, 'S,M,L,XL,XXL,3XL'),
(203, 156, 'S,M,L,XL,XXL'),
(204, 157, 'S,M,L,XL,XXL'),
(205, 158, 'S,M,L,XL,XXL,3XL'),
(206, 159, 'S,M,L,XL'),
(207, 160, 'S,M,L,XL,XXL'),
(208, 161, 'S,M,L,XL,XXL'),
(209, 162, 'S,M,L,XL,XXL'),
(210, 163, 'S,M,L,XL'),
(211, 164, 'S,M,L,XL,XXL'),
(212, 165, 'S,M,L,XL,XXL'),
(213, 166, 'S,M,L,XL,XXL'),
(214, 167, 'S,M,L,XL,XXL'),
(215, 168, 'S,M,L,XL,XXL'),
(216, 169, 'S,M,L,XL,XXL'),
(217, 170, 'S,M,L,XL,XXL'),
(218, 171, 'S,M,L,XL,XXL'),
(219, 172, 'S,M,L,XL'),
(220, 173, 'S,M,L,XL'),
(221, 174, 'S,M,L,XL'),
(222, 175, 'S,M,L,XL,XXL'),
(223, 176, 'S,M,L,XL,XXL'),
(224, 177, 'S,M,L,XL,XXL'),
(225, 178, 'S,M,L,XL,XXL'),
(226, 179, 'S,M,L,XL'),
(227, 180, 'S,M,L,XL,XXL'),
(228, 181, 'S,M,L,XL,XXL'),
(229, 182, 'S,M,L,XL,XXL'),
(230, 183, 'S,M,L,XL'),
(231, 184, 'S,M,L,XL,XXL'),
(232, 185, 'S,M,L,XL,XXL'),
(233, 186, 'S,M,L,XL'),
(234, 187, 'S,M,L,XL,XXL'),
(235, 188, 'S,M,L,XL,XXL'),
(236, 189, 'S,M,L,XL,XXL'),
(237, 190, 'S,M,L,XL,XXL,3XL'),
(238, 191, 'S,M,L,XL,XXL'),
(239, 192, 'S,M,L,XL,XXL');

-- --------------------------------------------------------

--
-- Table structure for table `producttype`
--

DROP TABLE IF EXISTS `producttype`;
CREATE TABLE IF NOT EXISTS `producttype` (
  `ProductTypeId` int NOT NULL AUTO_INCREMENT,
  `TypeName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ProductTypeId`),
  UNIQUE KEY `TypeName` (`TypeName`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `producttype`
--

INSERT INTO `producttype` (`ProductTypeId`, `TypeName`, `created_at`) VALUES
(1, 'T-Shirt', '2025-03-17 03:55:22'),
(2, 'shirt', '2025-03-17 04:08:23'),
(4, 'Dress', '2025-03-24 12:36:58'),
(5, 'Kurti & pajama', '2025-04-10 11:25:09'),
(6, 'jeans ', '2025-04-10 14:26:15');

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
CREATE TABLE IF NOT EXISTS `rating` (
  `RatingId` int NOT NULL AUTO_INCREMENT,
  `BuyerId` int NOT NULL,
  `ProductId` int NOT NULL,
  `rating` int NOT NULL,
  `rating_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `feedbackid` int NOT NULL,
  PRIMARY KEY (`RatingId`),
  KEY `BuyerId` (`BuyerId`),
  KEY `ProductId` (`ProductId`),
  KEY `feedbackid` (`feedbackid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `seller`
--

DROP TABLE IF EXISTS `seller`;
CREATE TABLE IF NOT EXISTS `seller` (
  `SellerId` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(70) NOT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Number` varchar(15) NOT NULL,
  `GST_Number` varchar(16) NOT NULL,
  `Aadhar_Card_Number` varchar(20) NOT NULL,
  `Pan_Card_Number` varchar(12) NOT NULL,
  `role` varchar(10) NOT NULL,
  `activestatus` int NOT NULL,
  PRIMARY KEY (`SellerId`)
) ENGINE=InnoDB AUTO_INCREMENT=170 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `seller`
--

INSERT INTO `seller` (`SellerId`, `Name`, `Email`, `Password`, `Number`, `GST_Number`, `Aadhar_Card_Number`, `Pan_Card_Number`, `role`, `activestatus`) VALUES
(150, 'Jitesh Yadav', 'jiteshyadav5019@gmail.com', '123456', '1254632589', '24EOGLU31', '555544443333', '1254', 'seller', 1),
(151, 'Rajvi', 'Rajvivariya@gmail.com', '123', '09724835583', '24EOGLU3121P4Z7', '555577778', 'AKSHK145O', 'seller', 1),
(152, 'sumit', 'sumit@gmail.com', '123', '123', '123', '123', '123', 'seller', 1),
(155, 'sakshi ', 'sakshi@gmail.com', '123', '9099815723', '24EOGLU3121P4Z7', '555577778888', 'AKSHK145O', 'seller', 1),
(169, 'adi', 'adi@gmail.com', 'adi123', '9724835583', '24EOGLU3121P4Z7', '123412341234', 'BNJPY942G', 'seller', 1);

-- --------------------------------------------------------

--
-- Table structure for table `seller_contact`
--

DROP TABLE IF EXISTS `seller_contact`;
CREATE TABLE IF NOT EXISTS `seller_contact` (
  `ContactID` int NOT NULL AUTO_INCREMENT,
  `SellerId` int DEFAULT NULL,
  `Message` text,
  `Date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Reply` text NOT NULL,
  PRIMARY KEY (`ContactID`),
  KEY `SellerId` (`SellerId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `seller_contact`
--

INSERT INTO `seller_contact` (`ContactID`, `SellerId`, `Message`, `Date`, `Reply`) VALUES
(2, 150, 'hello admin i want to add new product in your website will you allow that product type so i can add that product in you website', '2025-03-17 04:39:48', 'yes for  sure i will add thoes type'),
(3, 150, 'saadi add kar na h ', '2025-03-18 03:47:42', 'yes '),
(4, 150, 'add one more productid', '2025-04-07 10:48:06', 'okk i will'),
(5, 151, 'can you add the Kurti & pajama product type so u sell thoes product on this webiste \n', '2025-04-10 11:23:35', 'yes will add thoes product type '),
(6, 169, 'i want to add jeans in this website can you add that product type \n', '2025-04-10 14:25:25', 'yes i will add that product');

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
CREATE TABLE IF NOT EXISTS `size` (
  `ProductSizeId` int NOT NULL AUTO_INCREMENT,
  `ProductSize` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Added_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ProductSizeId`),
  UNIQUE KEY `ProductSize` (`ProductSize`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`ProductSizeId`, `ProductSize`, `Added_at`) VALUES
(1, 'S', '2025-03-24 11:03:24'),
(2, 'M', '2025-03-24 11:03:31'),
(3, 'L', '2025-03-24 11:03:37'),
(4, 'XL', '2025-03-24 11:03:43'),
(5, 'XXL', '2025-03-24 11:03:47'),
(6, '3XL , 4XL', '2025-03-24 11:03:57');

-- --------------------------------------------------------

--
-- Table structure for table `tempseller`
--

DROP TABLE IF EXISTS `tempseller`;
CREATE TABLE IF NOT EXISTS `tempseller` (
  `tempsellerid` int NOT NULL AUTO_INCREMENT,
  `sellerid` int NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`tempsellerid`),
  KEY `tempseller_ibfk_1` (`sellerid`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`Buyerid`) REFERENCES `buyer` (`BuyerId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `addtocart`
--
ALTER TABLE `addtocart`
  ADD CONSTRAINT `addtocart_ibfk_1` FOREIGN KEY (`ProductId`) REFERENCES `products` (`ProductId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `addtocart_ibfk_2` FOREIGN KEY (`BuyerId`) REFERENCES `buyer` (`BuyerId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `approvedseller`
--
ALTER TABLE `approvedseller`
  ADD CONSTRAINT `approvedseller_ibfk_1` FOREIGN KEY (`LoginId`) REFERENCES `login` (`LoginId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `approvedseller_ibfk_2` FOREIGN KEY (`SellerId`) REFERENCES `seller` (`SellerId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`BuyerId`) REFERENCES `buyer` (`BuyerId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `feedback_ibfk_2` FOREIGN KEY (`ProductId`) REFERENCES `products` (`ProductId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`addressid`) REFERENCES `address` (`addressid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`orderId`) REFERENCES `order` (`orderId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orderdetails_ibfk_3` FOREIGN KEY (`ProductId`) REFERENCES `products` (`ProductId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`BuyerId`) REFERENCES `buyer` (`BuyerId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`orderId`) REFERENCES `order` (`orderId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `productimages`
--
ALTER TABLE `productimages`
  ADD CONSTRAINT `productimages_ibfk_1` FOREIGN KEY (`ProductId`) REFERENCES `products` (`ProductId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`SellerId`) REFERENCES `seller` (`SellerId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `productsize`
--
ALTER TABLE `productsize`
  ADD CONSTRAINT `productsize_ibfk_1` FOREIGN KEY (`ProductId`) REFERENCES `products` (`ProductId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`BuyerId`) REFERENCES `buyer` (`BuyerId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`ProductId`) REFERENCES `products` (`ProductId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rating_ibfk_3` FOREIGN KEY (`feedbackid`) REFERENCES `feedback` (`feedbackid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `seller_contact`
--
ALTER TABLE `seller_contact`
  ADD CONSTRAINT `seller_contact_ibfk_1` FOREIGN KEY (`SellerId`) REFERENCES `seller` (`SellerId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tempseller`
--
ALTER TABLE `tempseller`
  ADD CONSTRAINT `tempseller_ibfk_1` FOREIGN KEY (`sellerid`) REFERENCES `seller` (`SellerId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
