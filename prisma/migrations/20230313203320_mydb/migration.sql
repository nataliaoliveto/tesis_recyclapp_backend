-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_advertisementId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_materialComponentId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_materialProductId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_organicId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_postId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_userId_fkey";

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_advertisementId_fkey" FOREIGN KEY ("advertisementId") REFERENCES "Advertisement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_organicId_fkey" FOREIGN KEY ("organicId") REFERENCES "Organic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_materialProductId_fkey" FOREIGN KEY ("materialProductId") REFERENCES "MaterialProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_materialComponentId_fkey" FOREIGN KEY ("materialComponentId") REFERENCES "MaterialComponent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
