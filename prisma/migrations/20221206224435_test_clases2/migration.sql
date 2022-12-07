/*
  Warnings:

  - You are about to alter the column `durationStart` on the `advertisement` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `durationEnd` on the `advertisement` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `userCustomerId` on the `benefit` table. All the data in the column will be lost.
  - You are about to alter the column `endDate` on the `benefit` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `startDate` on the `chat` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `endDate` on the `chat` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `userCustomerActiveId` to the `Benefit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userCustomerHistoryId` to the `Benefit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `benefit` DROP FOREIGN KEY `Benefit_userCustomerId_fkey`;

-- AlterTable
ALTER TABLE `advertisement` MODIFY `durationStart` DATETIME NOT NULL,
    MODIFY `durationEnd` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `benefit` DROP COLUMN `userCustomerId`,
    ADD COLUMN `userCustomerActiveId` INTEGER NOT NULL,
    ADD COLUMN `userCustomerHistoryId` INTEGER NOT NULL,
    MODIFY `endDate` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `chat` MODIFY `startDate` DATETIME NOT NULL,
    MODIFY `endDate` DATETIME NOT NULL;

-- AddForeignKey
ALTER TABLE `Benefit` ADD CONSTRAINT `Benefit_userCustomerActiveId_fkey` FOREIGN KEY (`userCustomerActiveId`) REFERENCES `UserCustomer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Benefit` ADD CONSTRAINT `Benefit_userCustomerHistoryId_fkey` FOREIGN KEY (`userCustomerHistoryId`) REFERENCES `UserCustomer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatMessage` ADD CONSTRAINT `ChatMessage_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
