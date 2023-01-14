/*
  Warnings:

  - You are about to drop the column `isRecyclable` on the `MaterialComponent` table. All the data in the column will be lost.
  - Added the required column `recyclableType` to the `MaterialComponent` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RecyclableType" AS ENUM ('RECYCLABLE', 'NO_RECYCLABLE', 'DEPENDS', 'ORGANIC');

-- AlterTable
ALTER TABLE "MaterialComponent" DROP COLUMN "isRecyclable",
ADD COLUMN     "recyclableType" "RecyclableType" NOT NULL;
