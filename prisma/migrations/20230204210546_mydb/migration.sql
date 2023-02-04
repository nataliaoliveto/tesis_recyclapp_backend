/*
  Warnings:

  - A unique constraint covering the columns `[postNumber]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `UserCustomer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `UserStore` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postNumber` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userType` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserCustomer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserStore` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('CUSTOMER', 'STORE');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "postNumber" SMALLINT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userType" "UserType" NOT NULL;

-- AlterTable
ALTER TABLE "UserCustomer" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserStore" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Post_postNumber_key" ON "Post"("postNumber");

-- CreateIndex
CREATE UNIQUE INDEX "UserCustomer_userId_key" ON "UserCustomer"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserStore_userId_key" ON "UserStore"("userId");

-- AddForeignKey
ALTER TABLE "UserStore" ADD CONSTRAINT "UserStore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCustomer" ADD CONSTRAINT "UserCustomer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
