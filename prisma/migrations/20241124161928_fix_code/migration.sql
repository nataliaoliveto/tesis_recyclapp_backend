/*
  Warnings:

  - Made the column `generatedCode` on table `Chat` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Chat" ALTER COLUMN "generatedCode" SET NOT NULL;
