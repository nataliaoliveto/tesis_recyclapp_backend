-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_addressId_fkey";

-- AlterTable
ALTER TABLE "Chat" ALTER COLUMN "endDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "addressId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserCustomer" ALTER COLUMN "pointsCurrent" SET DEFAULT 0,
ALTER COLUMN "pointsTotal" SET DEFAULT 0;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;
