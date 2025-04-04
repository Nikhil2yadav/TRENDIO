-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 04, 2025 at 03:36 PM
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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`addressid`, `Buyerid`, `Address`, `State`, `City`, `Pincode`, `activestatus`) VALUES
(30, 42, '65 Ghanshyam Park Mora Tekra', 'Gujarat', 'Surat', 394510, 1),
(31, 45, '65 Ghanshyam Park Mora Tekra', 'Gujarat', 'Surat', 394510, 1),
(32, 42, '21 ashoknagar shiganpore road katargam surat', 'gujarat', 'surat', 385004, 1),
(33, 31, 'prime market bhulka bhavan ', 'Gujarat', 'Surat', 390045, 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `addtocart`
--

INSERT INTO `addtocart` (`addtocartid`, `ProductId`, `BuyerId`, `date`, `price`, `quantity`, `amount`, `Size`) VALUES
(152, 150, 42, '2025-04-02', 1298, 2, 2596, 'Free Size');

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
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `approvedseller`
--

INSERT INTO `approvedseller` (`ApprovedsellerId`, `SellerId`, `LoginId`, `status`) VALUES
(30, 150, 3, 1),
(31, 151, 3, 1),
(32, 152, 3, 1),
(35, 155, 3, 1);

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

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedbackid`, `BuyerId`, `ProductId`, `comment`, `feedback_date`, `activestatus`) VALUES
(19, 31, 141, 'this product is very nice i have every got', '2025-04-02 17:05:25', 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=190 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`orderId`, `addressid`, `totalamount`, `date`, `status`) VALUES
(183, 30, 599, '2026-03-26 13:48:34', 1),
(184, 31, 3596, '2026-03-30 09:30:19', 1),
(185, 32, 1797, '2025-04-01 09:19:43', 1),
(186, 32, 2997, '2025-04-01 10:03:17', 1),
(187, 32, 2578, '2025-04-02 17:00:44', 1),
(189, 33, 1298, '2025-04-02 21:47:04', 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`orderDetailId`, `orderId`, `quantity`, `subtotal`, `ProductId`, `Size`, `delivery_status`, `amount`) VALUES
(74, 183, 1, 599, 140, 'S', 'Out for Delivery', 599),
(75, 184, 1, 599, 140, 'M', 'Pending', 599),
(76, 184, 1, 2997, 148, 'M', 'Delivered', 2997),
(77, 185, 3, 1797, 140, 'XL', 'Delivered', 599),
(78, 186, 1, 2997, 148, 'XL', 'Shipped', 2997),
(79, 187, 2, 2578, 149, 'M', 'Pending', 1289),
(81, 189, 1, 1298, 150, 'Free Size', 'Pending', 1298);

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
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`paymentId`, `orderId`, `BuyerId`, `paymentMethod`, `transactionId`, `amount`, `paymentStatus`, `paymentDate`, `adminAmount`, `sellerAmount`) VALUES
(49, 183, 42, 'bankTransfer', 'TXN_17429772919877', 599, 'Completed', '2025-03-26 08:21:31', 59.9, 539.1),
(50, 184, 45, 'bankTransfer', 'TXN_17433072583850', 3596, 'Completed', '2025-03-30 04:00:58', 359.6, 3236.4),
(51, 185, 42, 'bankTransfer', 'TXN_17434795813949', 1797, 'Completed', '2025-04-01 03:53:01', 179.7, 1617.3),
(52, 186, 42, 'bankTransfer', 'TXN_17434820401583', 2997, 'Completed', '2025-04-01 04:34:00', 299.7, 2697.3),
(53, 187, 42, 'bankTransfer', 'TXN_17435934548316', 2578, 'Completed', '2025-04-02 11:30:54', 257.8, 2320.2),
(54, 189, 31, 'bankTransfer', 'TXN_17436106557090', 1298, 'Completed', '2025-04-02 16:17:35', 129.8, 1168.2);

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
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `productimages`
--

INSERT INTO `productimages` (`ProductImagesId`, `ProductId`, `Image1`, `image2`, `image3`, `image4`) VALUES
(30, 140, 'product_140_1742819610_0.jpeg', 'product_140_1742819610_1.jpeg', NULL, NULL),
(31, 141, 'product_141_1742819693_0.png', 'product_141_1742819693_1.jpeg', NULL, NULL),
(32, 142, 'product_142_1742819783_0.png', 'product_142_1742819783_1.png', NULL, NULL),
(33, 148, 'product_148_1742820373_0.jpeg', 'product_148_1742820373_1.jpeg', 'product_148_1742820373_2.jpeg', NULL),
(34, 149, 'product_149_1743507919_0.jpeg', 'product_149_1743507919_1.jpeg', NULL, NULL),
(35, 150, 'product_150_1743597230_0.avif', 'product_150_1743597230_1.jpeg', 'product_150_1743597230_2.webp', NULL);

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
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductId`, `SellerId`, `ProductName`, `ProductPrice`, `producttype`, `ProductDescription`, `Date`, `Gender`, `activestatus`) VALUES
(140, 150, 'blue shirt', 599, 'shirt', 'this is zudio company blue shirt and its very comfy to ware in summer ', '2025-03-24', 'Male', 1),
(141, 150, 'Green tshirt', 999, 'T-Shirt', 'this is also from the zudio company green tshirt and its also very comfiy to ware ', '2025-03-24', 'Male', 1),
(142, 150, 'T-shirt white colour', 899, 'T-Shirt', 'this is whirt tshirt', '2025-03-24', 'Male', 1),
(148, 150, 'Girls drees', 2997, 'Dress', 'This is girls drees ', '2025-03-24', 'Female', 1),
(149, 151, 'green colour dress', 1289, 'Dress', 'this our dress', '2026-04-01', 'Female', 1),
(150, 152, 'pan parag saree', 1298, 'saree', 'this is pan parag saree', '2025-04-02', 'Female', 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=198 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `productsize`
--

INSERT INTO `productsize` (`SizeId`, `ProductId`, `Size`) VALUES
(192, 140, 'S,M,L,XL'),
(193, 141, 'S,M,L,XL,XXL'),
(194, 142, 'S,M,L'),
(195, 148, 'S,M,L,XL'),
(196, 149, 'S,M,L'),
(197, 150, 'Free Size');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `producttype`
--

INSERT INTO `producttype` (`ProductTypeId`, `TypeName`, `created_at`) VALUES
(1, 'T-Shirt', '2025-03-17 03:55:22'),
(2, 'shirt', '2025-03-17 04:08:23'),
(3, 'saree', '2025-03-18 03:48:11'),
(4, 'Dress', '2025-03-24 12:36:58');

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

--
-- Dumping data for table `rating`
--

INSERT INTO `rating` (`RatingId`, `BuyerId`, `ProductId`, `rating`, `rating_date`, `feedbackid`) VALUES
(14, 31, 141, 4, '2025-04-02 17:05:25', 19);

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
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `seller`
--

INSERT INTO `seller` (`SellerId`, `Name`, `Email`, `Password`, `Number`, `GST_Number`, `Aadhar_Card_Number`, `Pan_Card_Number`, `role`, `activestatus`) VALUES
(150, 'Jitesh Yadav', 'jiteshyadav5019@gmail.com', '123456', '1254632589', '24EOGLU31', '555544443333', '1254', 'seller', 1),
(151, 'Rajvi', 'Rajvivariya@gmail.com', '123', '09724835583', '24EOGLU3121P4Z7', '555577778', 'AKSHK145O', 'seller', 1),
(152, 'sumit', 'sumit@gmail.com', '123', '123', '123', '123', '123', 'seller', 1),
(155, 'sakshi ', 'sakshi@gmail.com', '123', '9099815723', '24EOGLU3121P4Z7', '555577778888', 'AKSHK145O', 'seller', 1),
(168, 'adi', 'adi@gmail.com', '145236', '9724835583', '22AAAAA0000A1Z5', '123456789456', 'ABCDE1234A', 'seller', 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `seller_contact`
--

INSERT INTO `seller_contact` (`ContactID`, `SellerId`, `Message`, `Date`, `Reply`) VALUES
(2, 150, 'hello admin i want to add new product in your website will you allow that product type so i can add that product in you website', '2025-03-17 04:39:48', 'yes for  sure i will add thoes type'),
(3, 150, 'saadi add kar na h ', '2025-03-18 03:47:42', 'yes ');

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
(6, '3XL , 4XL', '2025-03-24 11:03:57'),
(7, 'Free Size', '2025-03-24 11:04:21');

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
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tempseller`
--

INSERT INTO `tempseller` (`tempsellerid`, `sellerid`, `status`) VALUES
(83, 168, 0);

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
