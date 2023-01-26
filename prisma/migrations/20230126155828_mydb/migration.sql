/*
  Warnings:

  - You are about to drop the `_GreenPointToOrganic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_GreenPointToOrganic" DROP CONSTRAINT "_GreenPointToOrganic_A_fkey";

-- DropForeignKey
ALTER TABLE "_GreenPointToOrganic" DROP CONSTRAINT "_GreenPointToOrganic_B_fkey";

-- AlterTable
ALTER TABLE "GreenPoint" ADD COLUMN     "organic" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "_GreenPointToOrganic";
