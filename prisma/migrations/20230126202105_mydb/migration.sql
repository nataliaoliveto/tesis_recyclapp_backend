/*
  Warnings:

  - Changed the type of `purpouse` on the `Post` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PostPurpouse" AS ENUM ('HAVE', 'WANT');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "purpouse",
ADD COLUMN     "purpouse" "PostPurpouse" NOT NULL,
ALTER COLUMN "isActive" SET DEFAULT true,
ALTER COLUMN "isReserved" SET DEFAULT false;
