-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "citext";

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('CUSTOMER', 'STORE');

-- CreateEnum
CREATE TYPE "BenefitType" AS ENUM ('DISCOUNT', 'PRODUCT', 'DOUBLEPRODUCT');

-- CreateEnum
CREATE TYPE "PostPurpouse" AS ENUM ('HAVE', 'WANT');

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "street" VARCHAR(50) NOT NULL,
    "flat" VARCHAR(10),
    "city" VARCHAR(50) NOT NULL,
    "state" VARCHAR(50) NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "userId" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "postalCode" VARCHAR(4) NOT NULL,
    "displayName" TEXT,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStore" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiryDate" DATE NOT NULL,
    "hasBenefits" BOOLEAN NOT NULL DEFAULT false,
    "subscriptionId" TEXT NOT NULL,
    "paymentCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserStore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCustomer" (
    "id" TEXT NOT NULL,
    "pointsCurrent" INTEGER NOT NULL DEFAULT 0,
    "pointsTotal" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "value" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" VARCHAR(24) NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Advertisement" (
    "id" TEXT NOT NULL,
    "durationStart" DATE,
    "durationEnd" DATE,
    "text" VARCHAR(255) NOT NULL,
    "userId" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "paymentCompleted" BOOLEAN NOT NULL DEFAULT false,
    "title" VARCHAR(30) NOT NULL,

    CONSTRAINT "Advertisement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "name" CITEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "duration" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Benefit" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "type" "BenefitType" NOT NULL,
    "endDate" DATE NOT NULL,
    "quantity" INTEGER NOT NULL,
    "pointsCost" INTEGER NOT NULL,
    "userStoreId" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Benefit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaterialProduct" (
    "id" TEXT NOT NULL,
    "name" CITEXT NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MaterialProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaterialComponent" (
    "id" TEXT NOT NULL,
    "name" CITEXT NOT NULL,
    "description" VARCHAR(1024) NOT NULL,
    "icon" VARCHAR(64) NOT NULL DEFAULT 'help-circle',
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "isRecyclable" BOOLEAN NOT NULL,
    "materialProductId" TEXT NOT NULL,

    CONSTRAINT "MaterialComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "quantity" SMALLINT NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "purpouse" "PostPurpouse" NOT NULL,
    "pointsAwared" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "materialProductId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userPostId" TEXT NOT NULL,
    "userCommentId" TEXT NOT NULL,
    "generatedCode" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" DATE,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" VARCHAR(255) NOT NULL,
    "senderId" TEXT NOT NULL,
    "senderUsername" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BenefitAssignment" (
    "id" TEXT NOT NULL,
    "benefitId" TEXT NOT NULL,
    "userCustomerId" TEXT NOT NULL,
    "generatedCode" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "BenefitAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPointsHistory" (
    "id" SERIAL NOT NULL,
    "userCustomerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "pointsChange" INTEGER NOT NULL,
    "previousPointsCurrent" INTEGER NOT NULL,
    "newPointsCurrent" INTEGER NOT NULL,
    "previousPointsTotal" INTEGER NOT NULL,
    "newPointsTotal" INTEGER NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserPointsHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "message" VARCHAR(255) NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserStore_userId_key" ON "UserStore"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserCustomer_userId_key" ON "UserCustomer"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_userId_key" ON "Rating"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_name_key" ON "Subscription"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MaterialProduct_name_key" ON "MaterialProduct"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MaterialComponent_name_key" ON "MaterialComponent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Chat_postId_userPostId_userCommentId_key" ON "Chat"("postId", "userPostId", "userCommentId");

-- AddForeignKey
ALTER TABLE "UserStore" ADD CONSTRAINT "UserStore_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Benefit" ADD CONSTRAINT "Benefit_userStoreId_fkey" FOREIGN KEY ("userStoreId") REFERENCES "UserStore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialComponent" ADD CONSTRAINT "MaterialComponent_materialProductId_fkey" FOREIGN KEY ("materialProductId") REFERENCES "MaterialProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_materialProductId_fkey" FOREIGN KEY ("materialProductId") REFERENCES "MaterialProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BenefitAssignment" ADD CONSTRAINT "BenefitAssignment_benefitId_fkey" FOREIGN KEY ("benefitId") REFERENCES "Benefit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BenefitAssignment" ADD CONSTRAINT "BenefitAssignment_userCustomerId_fkey" FOREIGN KEY ("userCustomerId") REFERENCES "UserCustomer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPointsHistory" ADD CONSTRAINT "UserPointsHistory_userCustomerId_fkey" FOREIGN KEY ("userCustomerId") REFERENCES "UserCustomer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
