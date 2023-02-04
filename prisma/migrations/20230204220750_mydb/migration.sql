/*
  Warnings:

  - You are about to drop the column `userCustomerActiveId` on the `Benefit` table. All the data in the column will be lost.
  - You are about to drop the column `userCustomerHistoryId` on the `Benefit` table. All the data in the column will be lost.
  - You are about to drop the column `isArchived` on the `UserCustomer` table. All the data in the column will be lost.
  - You are about to drop the column `isArchived` on the `UserStore` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Benefit" DROP COLUMN "userCustomerActiveId",
DROP COLUMN "userCustomerHistoryId";

-- AlterTable
ALTER TABLE "UserCustomer" DROP COLUMN "isArchived";

-- AlterTable
ALTER TABLE "UserStore" DROP COLUMN "isArchived";
