/*
  Warnings:

  - You are about to drop the column `imageId` on the `Advertisement` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `MaterialComponent` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `MaterialProduct` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `Organic` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[advertisementId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[organicId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[materialProductId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[materialComponentId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[postId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Advertisement" DROP CONSTRAINT "Advertisement_imageId_fkey";

-- DropForeignKey
ALTER TABLE "MaterialComponent" DROP CONSTRAINT "MaterialComponent_imageId_fkey";

-- DropForeignKey
ALTER TABLE "MaterialProduct" DROP CONSTRAINT "MaterialProduct_imageId_fkey";

-- DropForeignKey
ALTER TABLE "Organic" DROP CONSTRAINT "Organic_imageId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_imageId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_imageId_fkey";

-- DropIndex
DROP INDEX "Advertisement_imageId_key";

-- DropIndex
DROP INDEX "MaterialComponent_imageId_key";

-- DropIndex
DROP INDEX "MaterialProduct_imageId_key";

-- DropIndex
DROP INDEX "Organic_imageId_key";

-- DropIndex
DROP INDEX "Post_imageId_key";

-- DropIndex
DROP INDEX "User_imageId_key";

-- AlterTable
ALTER TABLE "Advertisement" DROP COLUMN "imageId";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "advertisementId" TEXT,
ADD COLUMN     "materialComponentId" TEXT,
ADD COLUMN     "materialProductId" TEXT,
ADD COLUMN     "organicId" TEXT,
ADD COLUMN     "postId" TEXT,
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "MaterialComponent" DROP COLUMN "imageId";

-- AlterTable
ALTER TABLE "MaterialProduct" DROP COLUMN "imageId";

-- AlterTable
ALTER TABLE "Organic" DROP COLUMN "imageId";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "imageId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "imageId";

-- CreateIndex
CREATE UNIQUE INDEX "Image_userId_key" ON "Image"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_advertisementId_key" ON "Image"("advertisementId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_organicId_key" ON "Image"("organicId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_materialProductId_key" ON "Image"("materialProductId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_materialComponentId_key" ON "Image"("materialComponentId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_postId_key" ON "Image"("postId");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_advertisementId_fkey" FOREIGN KEY ("advertisementId") REFERENCES "Advertisement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_organicId_fkey" FOREIGN KEY ("organicId") REFERENCES "Organic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_materialProductId_fkey" FOREIGN KEY ("materialProductId") REFERENCES "MaterialProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_materialComponentId_fkey" FOREIGN KEY ("materialComponentId") REFERENCES "MaterialComponent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
