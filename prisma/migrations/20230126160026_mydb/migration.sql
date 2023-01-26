/*
  Warnings:

  - You are about to drop the column `organic` on the `GreenPoint` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GreenPoint" DROP COLUMN "organic",
ADD COLUMN     "hasOrganic" BOOLEAN NOT NULL DEFAULT false;
