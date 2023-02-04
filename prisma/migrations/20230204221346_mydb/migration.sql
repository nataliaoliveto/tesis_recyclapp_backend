/*
  Warnings:

  - Changed the type of `type` on the `Benefit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "BenefitType" AS ENUM ('DISCOUNT', 'PRODUCT', 'DOUBLEPRODUCT');

-- AlterTable
ALTER TABLE "Benefit" DROP COLUMN "type",
ADD COLUMN     "type" "BenefitType" NOT NULL;
