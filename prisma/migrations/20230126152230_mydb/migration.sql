/*
  Warnings:

  - You are about to drop the column `postalCode` on the `Address` table. All the data in the column will be lost.
  - Added the required column `cooperative` to the `GreenPoint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "postalCode";

-- AlterTable
ALTER TABLE "GreenPoint" ADD COLUMN     "cooperative" VARCHAR(200) NOT NULL;
