/*
  Warnings:

  - You are about to drop the column `displayName` on the `UserStore` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "UserStore_displayName_key";

-- AlterTable
ALTER TABLE "UserStore" DROP COLUMN "displayName";
