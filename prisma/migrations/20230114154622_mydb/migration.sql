-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "citext";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "surname" VARCHAR(30) NOT NULL,
    "mail" CITEXT NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "username" CITEXT NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "street" VARCHAR(50) NOT NULL,
    "flat" VARCHAR(10) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "state" VARCHAR(50) NOT NULL,
    "postalCode" VARCHAR(10) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "greenPointId" INTEGER,
    "userId" INTEGER,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStore" (
    "id" SERIAL NOT NULL,
    "displayName" CITEXT NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserStore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCustomer" (
    "id" SERIAL NOT NULL,
    "pointsCurrent" INTEGER NOT NULL DEFAULT 0,
    "pointsTotal" INTEGER NOT NULL DEFAULT 0,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "value" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Advertisement" (
    "id" SERIAL NOT NULL,
    "durationStart" DATE NOT NULL,
    "durationEnd" DATE NOT NULL,
    "displayName" VARCHAR(30) NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "subscriptionId" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Advertisement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" SERIAL NOT NULL,
    "name" CITEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "duration" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Benefit" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "endDate" DATE NOT NULL,
    "quantity" INTEGER NOT NULL,
    "pointsCost" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "userStoreId" INTEGER NOT NULL,
    "userCustomerActiveId" INTEGER NOT NULL,
    "userCustomerHistoryId" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Benefit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GreenPoint" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "availability" JSON NOT NULL,
    "type" VARCHAR(15) NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "GreenPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organic" (
    "id" SERIAL NOT NULL,
    "name" CITEXT NOT NULL,
    "isCompostable" BOOLEAN NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Organic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Material" (
    "id" SERIAL NOT NULL,
    "name" CITEXT NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaterialType" (
    "id" SERIAL NOT NULL,
    "name" CITEXT NOT NULL,
    "type" VARCHAR(15) NOT NULL,
    "greenPointId" INTEGER,
    "materialId" INTEGER,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MaterialType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "quantity" SMALLINT NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "purpouse" VARCHAR(10) NOT NULL,
    "pointsAwared" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "isReserved" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    "materialId" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostCommitment" (
    "id" SERIAL NOT NULL,
    "tokenCode" VARCHAR(25) NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "postId" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PostCommitment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" SERIAL NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE,
    "isActive" BOOLEAN NOT NULL,
    "postId" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" VARCHAR(255) NOT NULL,
    "senderId" INTEGER NOT NULL,
    "receiverId" INTEGER NOT NULL,
    "chatId" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_benefitsActive" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_benefitsHistory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_GreenPointToOrganic" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_mail_key" ON "User"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Address_greenPointId_key" ON "Address"("greenPointId");

-- CreateIndex
CREATE UNIQUE INDEX "UserStore_displayName_key" ON "UserStore"("displayName");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_name_key" ON "Subscription"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Organic_name_key" ON "Organic"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Material_name_key" ON "Material"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MaterialType_name_key" ON "MaterialType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_benefitsActive_AB_unique" ON "_benefitsActive"("A", "B");

-- CreateIndex
CREATE INDEX "_benefitsActive_B_index" ON "_benefitsActive"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_benefitsHistory_AB_unique" ON "_benefitsHistory"("A", "B");

-- CreateIndex
CREATE INDEX "_benefitsHistory_B_index" ON "_benefitsHistory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GreenPointToOrganic_AB_unique" ON "_GreenPointToOrganic"("A", "B");

-- CreateIndex
CREATE INDEX "_GreenPointToOrganic_B_index" ON "_GreenPointToOrganic"("B");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_greenPointId_fkey" FOREIGN KEY ("greenPointId") REFERENCES "GreenPoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Benefit" ADD CONSTRAINT "Benefit_userStoreId_fkey" FOREIGN KEY ("userStoreId") REFERENCES "UserStore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialType" ADD CONSTRAINT "MaterialType_greenPointId_fkey" FOREIGN KEY ("greenPointId") REFERENCES "GreenPoint"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaterialType" ADD CONSTRAINT "MaterialType_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "_GreenPointToOrganic" ADD CONSTRAINT "_GreenPointToOrganic_A_fkey" FOREIGN KEY ("A") REFERENCES "GreenPoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GreenPointToOrganic" ADD CONSTRAINT "_GreenPointToOrganic_B_fkey" FOREIGN KEY ("B") REFERENCES "Organic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
