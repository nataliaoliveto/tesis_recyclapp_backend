/*
  Warnings:

  - A unique constraint covering the columns `[postId,userPostId,userCommentId]` on the table `Chat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userCommentId` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userPostId` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "userCommentId" TEXT NOT NULL,
ADD COLUMN     "userPostId" TEXT NOT NULL,
ALTER COLUMN "startDate" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "startDate" SET DATA TYPE TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "Chat_postId_userPostId_userCommentId_key" ON "Chat"("postId", "userPostId", "userCommentId");
