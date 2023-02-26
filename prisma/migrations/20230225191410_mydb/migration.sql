/*
  Warnings:

  - Added the required column `expiryDate` to the `UserStore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptionId` to the `UserStore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserStore" ADD COLUMN     "expiryDate" DATE NOT NULL,
ADD COLUMN     "hasBenefits" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "subscriptionId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "UserStore" ADD CONSTRAINT "UserStore_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
