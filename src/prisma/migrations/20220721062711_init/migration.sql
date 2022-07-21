-- AlterTable
ALTER TABLE `server_requests` ADD COLUMN `Database` VARCHAR(50) NULL,
    ADD COLUMN `Environment` VARCHAR(50) NULL;
