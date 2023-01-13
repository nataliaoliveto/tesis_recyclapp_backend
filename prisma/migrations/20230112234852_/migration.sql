/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Material` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `MaterialType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Organic` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Material" ALTER COLUMN "name" SET DATA TYPE VARCHAR(25);

-- AlterTable
ALTER TABLE "MaterialType" ALTER COLUMN "name" SET DATA TYPE VARCHAR(25);

-- CreateIndex
CREATE UNIQUE INDEX "Material_name_key" ON "Material"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MaterialType_name_key" ON "MaterialType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Organic_name_key" ON "Organic"("name");
