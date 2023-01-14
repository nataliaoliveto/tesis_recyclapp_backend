/*
  Warnings:

  - You are about to drop the column `description` on the `MaterialProduct` table. All the data in the column will be lost.
  - Added the required column `description` to the `MaterialComponent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MaterialComponent" ADD COLUMN     "description" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "MaterialProduct" DROP COLUMN "description";
