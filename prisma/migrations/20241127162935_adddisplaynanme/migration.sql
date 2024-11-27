/*
  Warnings:

  - Made the column `displayName` on table `Advertisement` required. This step will fail if there are existing NULL values in that column.
  - Made the column `displayName` on table `Benefit` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "displayName" TEXT;

-- AlterTable
ALTER TABLE "Advertisement" ALTER COLUMN "displayName" SET NOT NULL;

-- AlterTable
ALTER TABLE "Benefit" ALTER COLUMN "displayName" SET NOT NULL;
