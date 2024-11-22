/*
  Warnings:

  - You are about to drop the column `postNumber` on the `Post` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Post_postNumber_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "postNumber";
