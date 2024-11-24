/*
  Warnings:

  - You are about to drop the column `userCommentUsername` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `userPostUsername` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `receiverId` on the `ChatMessage` table. All the data in the column will be lost.
  - Added the required column `senderUsername` to the `ChatMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "userCommentUsername",
DROP COLUMN "userPostUsername";

-- AlterTable
ALTER TABLE "ChatMessage" DROP COLUMN "receiverId",
ADD COLUMN     "senderUsername" TEXT NOT NULL;
