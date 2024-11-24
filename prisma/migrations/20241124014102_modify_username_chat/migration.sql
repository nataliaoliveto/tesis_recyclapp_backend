/*
  Warnings:

  - You are about to drop the column `receiverUsername` on the `ChatMessage` table. All the data in the column will be lost.
  - You are about to drop the column `senderUsername` on the `ChatMessage` table. All the data in the column will be lost.
  - Added the required column `userCommentUsername` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userPostUsername` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "userCommentUsername" TEXT NOT NULL,
ADD COLUMN     "userPostUsername" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ChatMessage" DROP COLUMN "receiverUsername",
DROP COLUMN "senderUsername";
