-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "citext";

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('CUSTOMER', 'STORE');

-- CreateEnum
CREATE TYPE "BenefitType" AS ENUM ('DISCOUNT', 'PRODUCT', 'DOUBLEPRODUCT');

-- CreateEnum
CREATE TYPE "RecyclableType" AS ENUM ('RECYCLABLE', 'NO_RECYCLABLE', 'DEPENDS', 'ORGANIC');

-- CreateEnum
CREATE TYPE "PostPurpouse" AS ENUM ('HAVE', 'WANT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "surname" VARCHAR(30) NOT NULL,
    "mail" CITEXT NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "username" CITEXT NOT NULL,
    "imageId" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "userType" "UserType" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "street" VARCHAR(50) NOT NULL,
    "flat" VARCHAR(10) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "state" VARCHAR(50) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "greenPointId" TEXT,
    "userId" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStore" (
    "id" TEXT NOT NULL,
    "displayName" CITEXT NOT NULL,
    "userId" TEXT NOT NULL,

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
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Advertisement" (
    "id" TEXT NOT NULL,
    "durationStart" DATE NOT NULL,
    "durationEnd" DATE NOT NULL,
    "displayName" VARCHAR(30) NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "imageId" TEXT,
    "userId" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

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
    "name" VARCHAR(20) NOT NULL,
    "type" "BenefitType" NOT NULL,
    "endDate" DATE NOT NULL,
    "quantity" INTEGER NOT NULL,
    "pointsCost" INTEGER NOT NULL,
    "userStoreId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Benefit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GreenPoint" (
    "id" TEXT NOT NULL,
    "idpv" CITEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "availability" JSON NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "cooperative" VARCHAR(200) NOT NULL,
    "hasOrganic" BOOLEAN NOT NULL DEFAULT false,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "GreenPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organic" (
    "id" TEXT NOT NULL,
    "name" CITEXT NOT NULL,
    "imageId" TEXT,
    "isCompostable" BOOLEAN NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Organic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaterialProduct" (
    "id" TEXT NOT NULL,
    "name" CITEXT NOT NULL,
    "imageId" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MaterialProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaterialComponent" (
    "id" TEXT NOT NULL,
    "name" CITEXT NOT NULL,
    "recyclableType" "RecyclableType" NOT NULL,
    "description" VARCHAR(1024) NOT NULL,
    "imageId" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MaterialComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "postNumber" SMALLINT NOT NULL,
    "quantity" SMALLINT NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "purpouse" "PostPurpouse" NOT NULL,
    "pointsAwared" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "materialProductId" TEXT NOT NULL,
    "imageId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isReserved" BOOLEAN NOT NULL DEFAULT false,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostCommitment" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "tokenCode" VARCHAR(25) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PostCommitment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "startDate" DATE NOT NULL,
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
    "receiverId" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "publicId" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "version" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_benefitsActive" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_benefitsHistory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_GreenPointToMaterialComponent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MaterialProductToMaterialComponent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_mail_key" ON "User"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_imageId_key" ON "User"("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_greenPointId_key" ON "Address"("greenPointId");

-- CreateIndex
CREATE UNIQUE INDEX "UserStore_displayName_key" ON "UserStore"("displayName");

-- CreateIndex
CREATE UNIQUE INDEX "UserStore_userId_key" ON "UserStore"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserCustomer_userId_key" ON "UserCustomer"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_userId_key" ON "Rating"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Advertisement_imageId_key" ON "Advertisement"("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_name_key" ON "Subscription"("name");

-- CreateIndex
CREATE UNIQUE INDEX "GreenPoint_idpv_key" ON "GreenPoint"("idpv");

-- CreateIndex
CREATE UNIQUE INDEX "Organic_name_key" ON "Organic"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Organic_imageId_key" ON "Organic"("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "MaterialProduct_name_key" ON "MaterialProduct"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MaterialProduct_imageId_key" ON "MaterialProduct"("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "MaterialComponent_name_key" ON "MaterialComponent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MaterialComponent_imageId_key" ON "MaterialComponent"("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_postNumber_key" ON "Post"("postNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Post_imageId_key" ON "Post"("imageId");

-- CreateIndex
CREATE UNIQUE INDEX "Image_publicId_key" ON "Image"("publicId");

-- CreateIndex
CREATE UNIQUE INDEX "_benefitsActive_AB_unique" ON "_benefitsActive"("A", "B");

-- CreateIndex
CREATE INDEX "_benefitsActive_B_index" ON "_benefitsActive"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_benefitsHistory_AB_unique" ON "_benefitsHistory"("A", "B");

-- CreateIndex
CREATE INDEX "_benefitsHistory_B_index" ON "_benefitsHistory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GreenPointToMaterialComponent_AB_unique" ON "_GreenPointToMaterialComponent"("A", "B");

-- CreateIndex
CREATE INDEX "_GreenPointToMaterialComponent_B_index" ON "_GreenPointToMaterialComponent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MaterialProductToMaterialComponent_AB_unique" ON "_MaterialProductToMaterialComponent"("A", "B");

-- CreateIndex
CREATE INDEX "_MaterialProductToMaterialComponent_B_index" ON "_MaterialProductToMaterialComponent"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_greenPointId_fkey" FOREIGN KEY ("greenPointId") REFERENCES "GreenPoint"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStore" ADD CONSTRAINT "UserStore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCustomer" ADD CONSTRAINT "UserCustomer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Benefit" ADD CONSTRAINT "Benefit_userStoreId_fkey" FOREIGN KEY ("userStoreId") REFERENCES "UserStore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organic" ADD CONSTRAINT "Organic_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialProduct" ADD CONSTRAINT "MaterialProduct_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialComponent" ADD CONSTRAINT "MaterialComponent_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_materialProductId_fkey" FOREIGN KEY ("materialProductId") REFERENCES "MaterialProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostCommitment" ADD CONSTRAINT "PostCommitment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_benefitsActive" ADD CONSTRAINT "_benefitsActive_A_fkey" FOREIGN KEY ("A") REFERENCES "Benefit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_benefitsActive" ADD CONSTRAINT "_benefitsActive_B_fkey" FOREIGN KEY ("B") REFERENCES "UserCustomer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_benefitsHistory" ADD CONSTRAINT "_benefitsHistory_A_fkey" FOREIGN KEY ("A") REFERENCES "Benefit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_benefitsHistory" ADD CONSTRAINT "_benefitsHistory_B_fkey" FOREIGN KEY ("B") REFERENCES "UserCustomer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GreenPointToMaterialComponent" ADD CONSTRAINT "_GreenPointToMaterialComponent_A_fkey" FOREIGN KEY ("A") REFERENCES "GreenPoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GreenPointToMaterialComponent" ADD CONSTRAINT "_GreenPointToMaterialComponent_B_fkey" FOREIGN KEY ("B") REFERENCES "MaterialComponent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaterialProductToMaterialComponent" ADD CONSTRAINT "_MaterialProductToMaterialComponent_A_fkey" FOREIGN KEY ("A") REFERENCES "MaterialComponent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MaterialProductToMaterialComponent" ADD CONSTRAINT "_MaterialProductToMaterialComponent_B_fkey" FOREIGN KEY ("B") REFERENCES "MaterialProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;
