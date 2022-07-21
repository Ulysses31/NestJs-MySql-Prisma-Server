/*
  Warnings:

  - The primary key for the `employeeterritories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `order details` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `Id` to the `employeeterritories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Id` to the `order details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employeeterritories` DROP PRIMARY KEY,
    ADD COLUMN `Id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`Id`, `EmployeeID`, `TerritoryID`);

-- AlterTable
ALTER TABLE `order details` DROP PRIMARY KEY,
    ADD COLUMN `Id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`Id`, `OrderID`, `ProductID`);
