/*
  Warnings:

  - You are about to drop the column `image` on the `Advertisement` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `MaterialComponent` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `MaterialProduct` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Organic` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Advertisement" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "MaterialComponent" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "MaterialProduct" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "Organic" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image";

-- CreateTable
CREATE TABLE "BenefitAssignment" (
    "id" TEXT NOT NULL,
    "benefitId" TEXT NOT NULL,
    "userCustomerId" TEXT NOT NULL,
    "generatedCode" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "BenefitAssignment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BenefitAssignment" ADD CONSTRAINT "BenefitAssignment_benefitId_fkey" FOREIGN KEY ("benefitId") REFERENCES "Benefit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BenefitAssignment" ADD CONSTRAINT "BenefitAssignment_userCustomerId_fkey" FOREIGN KEY ("userCustomerId") REFERENCES "UserCustomer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
