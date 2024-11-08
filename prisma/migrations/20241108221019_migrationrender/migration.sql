/*
  Warnings:

  - Added the required column `postalCode` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "postalCode" VARCHAR(4) NOT NULL,
ALTER COLUMN "flat" DROP NOT NULL,
ALTER COLUMN "latitude" DROP NOT NULL,
ALTER COLUMN "longitude" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Benefit" ALTER COLUMN "name" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" SET DATA TYPE VARCHAR(255);
