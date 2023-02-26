-- AlterTable
ALTER TABLE "Advertisement" ADD COLUMN     "paymentCompleted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "isArchived" SET DEFAULT true;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "UserStore" ADD COLUMN     "paymentCompleted" BOOLEAN NOT NULL DEFAULT false;
