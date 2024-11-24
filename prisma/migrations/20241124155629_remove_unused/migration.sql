/*
  Warnings:

  - You are about to drop the column `isReserved` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Organic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PostCommitment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PostCommitment" DROP CONSTRAINT "PostCommitment_postId_fkey";

-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "generatedCode" TEXT;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "isReserved";

-- DropTable
DROP TABLE "Organic";

-- DropTable
DROP TABLE "PostCommitment";
