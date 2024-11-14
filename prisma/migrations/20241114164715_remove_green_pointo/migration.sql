/*
  Warnings:

  - You are about to drop the column `greenPointId` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `recyclableType` on the `MaterialComponent` table. All the data in the column will be lost.
  - You are about to drop the `GreenPoint` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GreenPointToMaterialComponent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `isRecyclable` to the `MaterialComponent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_greenPointId_fkey";

-- DropForeignKey
ALTER TABLE "_GreenPointToMaterialComponent" DROP CONSTRAINT "_GreenPointToMaterialComponent_A_fkey";

-- DropForeignKey
ALTER TABLE "_GreenPointToMaterialComponent" DROP CONSTRAINT "_GreenPointToMaterialComponent_B_fkey";

-- DropIndex
DROP INDEX "Address_greenPointId_key";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "greenPointId";

-- AlterTable
ALTER TABLE "MaterialComponent" DROP COLUMN "recyclableType",
ADD COLUMN     "isRecyclable" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "GreenPoint";

-- DropTable
DROP TABLE "_GreenPointToMaterialComponent";

-- DropEnum
DROP TYPE "RecyclableType";
