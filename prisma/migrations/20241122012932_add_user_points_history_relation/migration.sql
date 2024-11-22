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

-- AddForeignKey
ALTER TABLE "UserPointsHistory" ADD CONSTRAINT "UserPointsHistory_userCustomerId_fkey" FOREIGN KEY ("userCustomerId") REFERENCES "UserCustomer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
