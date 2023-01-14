/*
  Warnings:

  - You are about to drop the column `materialId` on the `MaterialType` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `MaterialType` table. All the data in the column will be lost.
  - You are about to drop the column `materialId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Material` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `abbreviation` to the `MaterialType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materialProductId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_greenPointId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_userId_fkey";

-- DropForeignKey
ALTER TABLE "Advertisement" DROP CONSTRAINT "Advertisement_subscriptionId_fkey";

-- DropForeignKey
ALTER TABLE "Advertisement" DROP CONSTRAINT "Advertisement_userId_fkey";

-- DropForeignKey
ALTER TABLE "MaterialType" DROP CONSTRAINT "MaterialType_greenPointId_fkey";

-- DropForeignKey
ALTER TABLE "MaterialType" DROP CONSTRAINT "MaterialType_materialId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_materialId_fkey";

-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_userId_fkey";

-- AlterTable
ALTER TABLE "MaterialType" DROP COLUMN "materialId",
DROP COLUMN "type",
ADD COLUMN     "abbreviation" VARCHAR(10) NOT NULL,
ADD COLUMN     "materialComponentId" INTEGER;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "materialId",
ADD COLUMN     "materialProductId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Material";

-- CreateTable
CREATE TABLE "MaterialProduct" (
    "id" SERIAL NOT NULL,
    "name" CITEXT NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MaterialProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaterialComponent" (
    "id" SERIAL NOT NULL,
    "name" CITEXT NOT NULL,
    "greenPointId" INTEGER,
    "materialProductId" INTEGER,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MaterialComponent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MaterialProduct_name_key" ON "MaterialProduct"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MaterialComponent_name_key" ON "MaterialComponent"("name");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_greenPointId_fkey" FOREIGN KEY ("greenPointId") REFERENCES "GreenPoint"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialComponent" ADD CONSTRAINT "MaterialComponent_greenPointId_fkey" FOREIGN KEY ("greenPointId") REFERENCES "GreenPoint"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialComponent" ADD CONSTRAINT "MaterialComponent_materialProductId_fkey" FOREIGN KEY ("materialProductId") REFERENCES "MaterialProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialType" ADD CONSTRAINT "MaterialType_materialComponentId_fkey" FOREIGN KEY ("materialComponentId") REFERENCES "MaterialComponent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_materialProductId_fkey" FOREIGN KEY ("materialProductId") REFERENCES "MaterialProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
