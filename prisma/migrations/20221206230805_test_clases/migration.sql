/*
  Warnings:

  - You are about to alter the column `durationStart` on the `advertisement` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `durationEnd` on the `advertisement` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `endDate` on the `benefit` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `startDate` on the `chat` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `endDate` on the `chat` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `displayName` on the `userstore` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(30)`.
  - A unique constraint covering the columns `[name]` on the table `Subscription` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `advertisement` MODIFY `durationStart` DATETIME NOT NULL,
    MODIFY `durationEnd` DATETIME NOT NULL,
    MODIFY `displayName` VARCHAR(30) NOT NULL;

-- AlterTable
ALTER TABLE `benefit` MODIFY `endDate` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `chat` MODIFY `startDate` DATETIME NOT NULL,
    MODIFY `endDate` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `chatmessage` MODIFY `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `userstore` MODIFY `displayName` VARCHAR(30) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Subscription_name_key` ON `Subscription`(`name`);
