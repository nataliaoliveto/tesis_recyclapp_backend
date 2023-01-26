/*
  Warnings:

  - A unique constraint covering the columns `[idpv]` on the table `GreenPoint` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idpv` to the `GreenPoint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GreenPoint" ADD COLUMN     "idpv" CITEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "GreenPoint_idpv_key" ON "GreenPoint"("idpv");
