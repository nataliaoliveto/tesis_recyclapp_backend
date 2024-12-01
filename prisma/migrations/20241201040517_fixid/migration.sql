-- DropForeignKey
ALTER TABLE "UserPointsHistory" DROP CONSTRAINT "UserPointsHistory_userCustomerId_fkey";

-- AlterTable
ALTER TABLE "UserPointsHistory" ALTER COLUMN "userCustomerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UserPointsHistory" ADD CONSTRAINT "UserPointsHistory_userCustomerId_fkey" FOREIGN KEY ("userCustomerId") REFERENCES "UserCustomer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
