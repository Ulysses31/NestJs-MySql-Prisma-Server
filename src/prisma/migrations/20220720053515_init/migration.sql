-- CreateTable
CREATE TABLE `server_requests` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Method` VARCHAR(5) NOT NULL,
    `BaseUrl` VARCHAR(100) NOT NULL,
    `OriginalUrl` VARCHAR(100) NOT NULL,
    `Params` VARCHAR(50) NOT NULL,
    `Body` VARCHAR(255) NOT NULL,
    `Path` VARCHAR(100) NOT NULL,
    `Hostname` VARCHAR(100) NOT NULL,
    `HttpVersion` VARCHAR(10) NOT NULL,
    `Ip` VARCHAR(50) NOT NULL,
    `Protocol` VARCHAR(50) NOT NULL,
    `Secure` VARCHAR(50) NOT NULL,
    `Headers` VARCHAR(255) NOT NULL,
    `CreatedBy` VARCHAR(50) NULL DEFAULT 'admin',
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
