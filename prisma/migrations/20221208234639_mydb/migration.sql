/*
  Warnings:

  - You are about to drop the column `addressId` on the `GreenPoint` table. All the data in the column will be lost.
  - You are about to drop the column `greenPointId` on the `Organic` table. All the data in the column will be lost.
  - You are about to drop the column `addressId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[greenPointId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Benefit" DROP CONSTRAINT "Benefit_userCustomerActiveId_fkey";

-- DropForeignKey
ALTER TABLE "Benefit" DROP CONSTRAINT "Benefit_userCustomerHistoryId_fkey";

-- DropForeignKey
ALTER TABLE "GreenPoint" DROP CONSTRAINT "GreenPoint_addressId_fkey";

-- DropForeignKey
ALTER TABLE "Organic" DROP CONSTRAINT "Organic_greenPointId_fkey";

-- AlterTable
ALTER TABLE "GreenPoint" DROP COLUMN "addressId";

-- AlterTable
ALTER TABLE "Organic" DROP COLUMN "greenPointId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "addressId";

-- CreateTable
CREATE TABLE "_benefitsActive" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_benefitsHistory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_GreenPointToOrganic" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_benefitsActive_AB_unique" ON "_benefitsActive"("A", "B");

-- CreateIndex
CREATE INDEX "_benefitsActive_B_index" ON "_benefitsActive"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_benefitsHistory_AB_unique" ON "_benefitsHistory"("A", "B");

-- CreateIndex
CREATE INDEX "_benefitsHistory_B_index" ON "_benefitsHistory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GreenPointToOrganic_AB_unique" ON "_GreenPointToOrganic"("A", "B");

-- CreateIndex
CREATE INDEX "_GreenPointToOrganic_B_index" ON "_GreenPointToOrganic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Address_greenPointId_key" ON "Address"("greenPointId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_greenPointId_fkey" FOREIGN KEY ("greenPointId") REFERENCES "GreenPoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_benefitsActive" ADD CONSTRAINT "_benefitsActive_A_fkey" FOREIGN KEY ("A") REFERENCES "Benefit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_benefitsActive" ADD CONSTRAINT "_benefitsActive_B_fkey" FOREIGN KEY ("B") REFERENCES "UserCustomer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_benefitsHistory" ADD CONSTRAINT "_benefitsHistory_A_fkey" FOREIGN KEY ("A") REFERENCES "Benefit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_benefitsHistory" ADD CONSTRAINT "_benefitsHistory_B_fkey" FOREIGN KEY ("B") REFERENCES "UserCustomer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GreenPointToOrganic" ADD CONSTRAINT "_GreenPointToOrganic_A_fkey" FOREIGN KEY ("A") REFERENCES "GreenPoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GreenPointToOrganic" ADD CONSTRAINT "_GreenPointToOrganic_B_fkey" FOREIGN KEY ("B") REFERENCES "Organic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
