-- CreateTable
CREATE TABLE "Donation" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "mail" CITEXT NOT NULL,
    "displayName" VARCHAR(30) NOT NULL,
    "durationStart" DATE NOT NULL,
    "durationEnd" DATE NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT true,
    "paymentCompleted" BOOLEAN NOT NULL DEFAULT false,
    "subscriptionId" TEXT NOT NULL,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Donation_mail_key" ON "Donation"("mail");
