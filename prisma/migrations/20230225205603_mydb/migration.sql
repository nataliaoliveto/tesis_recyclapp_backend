/*
  Warnings:

  - You are about to drop the column `displayName` on the `Advertisement` table. All the data in the column will be lost.
  - Added the required column `title` to the `Advertisement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Advertisement" DROP COLUMN "displayName",
ADD COLUMN     "title" VARCHAR(30) NOT NULL;
