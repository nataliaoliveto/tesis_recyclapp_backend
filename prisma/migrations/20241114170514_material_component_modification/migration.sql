/*
  Warnings:

  - You are about to drop the `_MaterialProductToMaterialComponent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `materialProductId` to the `MaterialComponent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_MaterialProductToMaterialComponent" DROP CONSTRAINT "_MaterialProductToMaterialComponent_A_fkey";

-- DropForeignKey
ALTER TABLE "_MaterialProductToMaterialComponent" DROP CONSTRAINT "_MaterialProductToMaterialComponent_B_fkey";

-- AlterTable
ALTER TABLE "MaterialComponent" ADD COLUMN     "materialProductId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_MaterialProductToMaterialComponent";

-- AddForeignKey
ALTER TABLE "MaterialComponent" ADD CONSTRAINT "MaterialComponent_materialProductId_fkey" FOREIGN KEY ("materialProductId") REFERENCES "MaterialProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
