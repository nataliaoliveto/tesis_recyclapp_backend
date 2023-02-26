-- AlterTable
ALTER TABLE "Advertisement" ALTER COLUMN "durationStart" DROP NOT NULL,
ALTER COLUMN "durationEnd" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Donation" ALTER COLUMN "durationStart" DROP NOT NULL,
ALTER COLUMN "durationEnd" DROP NOT NULL;
