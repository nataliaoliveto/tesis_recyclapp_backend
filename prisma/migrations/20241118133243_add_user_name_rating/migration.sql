/*
  Warnings:

  - Added the required column `userName` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rating" ADD COLUMN     "userName" VARCHAR(24) NOT NULL;
