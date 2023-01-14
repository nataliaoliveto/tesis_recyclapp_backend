/*
  Warnings:

  - You are about to drop the column `greenPointId` on the `MaterialComponent` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MaterialComponent" DROP CONSTRAINT "MaterialComponent_greenPointId_fkey";

-- DropForeignKey
ALTER TABLE "MaterialComponent" DROP CONSTRAINT "MaterialComponent_materialProductId_fkey";

-- AlterTable
ALTER TABLE "MaterialComponent" DROP COLUMN "greenPointId";

-- CreateTable
CREATE TABLE "_GreenPointToMaterialComponent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MaterialProductToMaterialComponent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GreenPointToMaterialComponent_AB_unique" ON "_GreenPointToMaterialComponent"("A", "B");

-- CreateIndex
CREATE INDEX "_GreenPointToMaterialComponent_B_index" ON "_GreenPointToMaterialComponent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MaterialProductToMaterialComponent_AB_unique" ON "_MaterialProductToMaterialComponent"("A", "B");

-- CreateIndex
CREATE INDEX "_MaterialProductToMaterialComponent_B_index" ON "_MaterialProductToMaterialComponent"("B");

-- AddForeignKey
ALTER TABLE "_GreenPointToMaterialComponent" ADD CONSTRAINT "_GreenPointToMaterialComponent_A_fkey" FOREIGN KEY ("A") REFERENCES "GreenPoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GreenPointToMaterialComponent" ADD CONSTRAINT "_GreenPointToMaterialComponent_B_fkey" FOREIGN KEY ("B") REFERENCES "MaterialComponent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaterialProductToMaterialComponent" ADD CONSTRAINT "_MaterialProductToMaterialComponent_A_fkey" FOREIGN KEY ("A") REFERENCES "MaterialComponent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaterialProductToMaterialComponent" ADD CONSTRAINT "_MaterialProductToMaterialComponent_B_fkey" FOREIGN KEY ("B") REFERENCES "MaterialProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;
