-- CreateTable
CREATE TABLE `categories` (
    `CategoryID` INTEGER NOT NULL AUTO_INCREMENT,
    `CategoryName` VARCHAR(15) NOT NULL,
    `Description` LONGTEXT NULL,
    `CreatedBy` VARCHAR(50) NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NULL,

    INDEX `CategoryName`(`CategoryName`),
    PRIMARY KEY (`CategoryID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customercustomerdemo` (
    `CustomerID` CHAR(5) NOT NULL,
    `CustomerTypeID` CHAR(10) NOT NULL,
    `CreatedBy` VARCHAR(50) NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`CustomerID`, `CustomerTypeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customerdemographics` (
    `CustomerTypeID` CHAR(10) NOT NULL,
    `CustomerDesc` LONGTEXT NULL,
    `CreatedBy` VARCHAR(50) NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`CustomerTypeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customers` (
    `CustomerID` CHAR(5) NOT NULL,
    `CompanyName` VARCHAR(40) NOT NULL,
    `ContactName` VARCHAR(30) NULL,
    `ContactTitle` VARCHAR(30) NULL,
    `Address` VARCHAR(60) NULL,
    `City` VARCHAR(15) NULL,
    `Region` VARCHAR(15) NULL,
    `PostalCode` VARCHAR(10) NULL,
    `Country` VARCHAR(15) NULL,
    `Phone` VARCHAR(24) NULL,
    `Fax` VARCHAR(24) NULL,
    `CreatedBy` VARCHAR(50) NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NULL,

    INDEX `City`(`City`),
    INDEX `CompanyName`(`CompanyName`),
    INDEX `PostalCode`(`PostalCode`),
    INDEX `Region`(`Region`),
    PRIMARY KEY (`CustomerID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employees` (
    `EmployeeID` INTEGER NOT NULL,
    `LastName` VARCHAR(20) NOT NULL,
    `FirstName` VARCHAR(10) NOT NULL,
    `Title` VARCHAR(30) NULL,
    `TitleOfCourtesy` VARCHAR(25) NULL,
    `BirthDate` DATETIME(0) NULL,
    `HireDate` DATETIME(0) NULL,
    `Address` VARCHAR(60) NULL,
    `City` VARCHAR(15) NULL,
    `Region` VARCHAR(15) NULL,
    `PostalCode` VARCHAR(10) NULL,
    `Country` VARCHAR(15) NULL,
    `HomePhone` VARCHAR(24) NULL,
    `Extension` VARCHAR(4) NULL,
    `Notes` LONGTEXT NULL,
    `ReportsTo` INTEGER NULL,
    `PhotoPath` VARCHAR(255) NULL,
    `CreatedBy` VARCHAR(50) NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NULL,

    INDEX `LastName`(`LastName`),
    INDEX `PostalCode`(`PostalCode`),
    INDEX `ReportsTo`(`ReportsTo`),
    PRIMARY KEY (`EmployeeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employeeterritories` (
    `EmployeeID` INTEGER NOT NULL,
    `TerritoryID` VARCHAR(20) NOT NULL,
    `CreatedBy` VARCHAR(50) NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`EmployeeID`, `TerritoryID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order details` (
    `OrderID` INTEGER NOT NULL,
    `ProductID` INTEGER NOT NULL,
    `UnitPrice` DECIMAL(19, 4) NOT NULL DEFAULT 0.0000,
    `Quantity` SMALLINT NOT NULL DEFAULT 1,
    `Discount` FLOAT NOT NULL DEFAULT 0,
    `CreatedBy` VARCHAR(50) NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NULL,

    INDEX `OrderID`(`OrderID`),
    INDEX `OrdersOrder_Details`(`OrderID`),
    INDEX `ProductID`(`ProductID`),
    INDEX `ProductsOrder_Details`(`ProductID`),
    PRIMARY KEY (`OrderID`, `ProductID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `OrderID` INTEGER NOT NULL,
    `CustomerID` CHAR(5) NULL,
    `EmployeeID` INTEGER NULL,
    `OrderDate` DATETIME(0) NULL,
    `RequiredDate` DATETIME(0) NULL,
    `ShippedDate` DATETIME(0) NULL,
    `ShipVia` INTEGER NULL,
    `Freight` DECIMAL(19, 4) NULL DEFAULT 0.0000,
    `ShipName` VARCHAR(40) NULL,
    `ShipAddress` VARCHAR(60) NULL,
    `ShipCity` VARCHAR(15) NULL,
    `ShipRegion` VARCHAR(15) NULL,
    `ShipPostalCode` VARCHAR(10) NULL,
    `ShipCountry` VARCHAR(15) NULL,
    `CreatedBy` VARCHAR(50) NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NULL,

    INDEX `CustomerID`(`CustomerID`),
    INDEX `CustomersOrders`(`CustomerID`),
    INDEX `EmployeeID`(`EmployeeID`),
    INDEX `EmployeesOrders`(`EmployeeID`),
    INDEX `OrderDate`(`OrderDate`),
    INDEX `ShipPostalCode`(`ShipPostalCode`),
    INDEX `ShippedDate`(`ShippedDate`),
    INDEX `ShippersOrders`(`ShipVia`),
    PRIMARY KEY (`OrderID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `ProductID` INTEGER NOT NULL AUTO_INCREMENT,
    `ProductName` VARCHAR(40) NOT NULL,
    `SupplierID` INTEGER NULL,
    `CategoryID` INTEGER NULL,
    `QuantityPerUnit` VARCHAR(20) NULL,
    `UnitPrice` DECIMAL(19, 4) NULL DEFAULT 0.0000,
    `UnitsInStock` SMALLINT NULL DEFAULT 0,
    `UnitsOnOrder` SMALLINT NULL DEFAULT 0,
    `ReorderLevel` SMALLINT NULL DEFAULT 0,
    `Discontinued` BOOLEAN NOT NULL DEFAULT false,
    `CreatedBy` VARCHAR(50) NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NULL,

    INDEX `CategoriesProducts`(`CategoryID`),
    INDEX `CategoryID`(`CategoryID`),
    INDEX `ProductName`(`ProductName`),
    INDEX `SupplierID`(`SupplierID`),
    INDEX `SuppliersProducts`(`SupplierID`),
    PRIMARY KEY (`ProductID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `region` (
    `RegionID` INTEGER NOT NULL,
    `RegionDescription` CHAR(50) NOT NULL,
    `CreatedBy` VARCHAR(50) NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`RegionID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shippers` (
    `ShipperID` INTEGER NOT NULL,
    `CompanyName` VARCHAR(40) NOT NULL,
    `Phone` VARCHAR(24) NULL,
    `CreatedBy` VARCHAR(50) NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`ShipperID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suppliers` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `CompanyName` VARCHAR(40) NOT NULL,
    `ContactName` VARCHAR(30) NULL,
    `ContactTitle` VARCHAR(30) NULL,
    `Address` VARCHAR(60) NULL,
    `City` VARCHAR(15) NULL,
    `Region` VARCHAR(15) NULL,
    `PostalCode` VARCHAR(10) NULL,
    `Country` VARCHAR(15) NULL,
    `Phone` VARCHAR(24) NULL,
    `Fax` VARCHAR(24) NULL,
    `HomePage` LONGTEXT NULL,
    `CreatedBy` VARCHAR(50) NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NULL,

    INDEX `CompanyName`(`CompanyName`),
    INDEX `PostalCode`(`PostalCode`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `territories` (
    `TerritoryID` VARCHAR(20) NOT NULL,
    `TerritoryDescription` CHAR(50) NOT NULL,
    `RegionID` INTEGER NOT NULL,
    `CreatedBy` VARCHAR(50) NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`TerritoryID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(20) NOT NULL,
    `Password` VARCHAR(50) NOT NULL,
    `Email` VARCHAR(200) NOT NULL,
    `Is_Active` TINYINT NOT NULL DEFAULT 1,
    `Access_Token` VARCHAR(200) NULL,
    `Refresh_Token` VARCHAR(200) NULL,
    `CreatedBy` VARCHAR(50) NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
