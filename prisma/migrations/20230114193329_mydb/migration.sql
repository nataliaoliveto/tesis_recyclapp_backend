/*
  Warnings:

  - You are about to drop the `MaterialType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `isRecyclable` to the `MaterialComponent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MaterialType" DROP CONSTRAINT "MaterialType_materialComponentId_fkey";

-- AlterTable
ALTER TABLE "MaterialComponent" ADD COLUMN     "isRecyclable" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "MaterialType";
