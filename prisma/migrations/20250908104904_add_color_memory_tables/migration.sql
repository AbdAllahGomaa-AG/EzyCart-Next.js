/*
  Warnings:

  - You are about to drop the column `color` on the `ProductVariant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId,memoryId,colorId]` on the table `ProductVariant` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `name` on the `Memory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `colorId` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."ProductVariant_color_idx";

-- DropIndex
DROP INDEX "public"."ProductVariant_productId_memoryId_color_key";

-- AlterTable
ALTER TABLE "public"."Memory" DROP COLUMN "name",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."ProductVariant" DROP COLUMN "color",
ADD COLUMN     "colorId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "public"."Color";

-- DropEnum
DROP TYPE "public"."MemorySize";

-- CreateTable
CREATE TABLE "public"."Color" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Color_name_key" ON "public"."Color"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Memory_name_key" ON "public"."Memory"("name");

-- CreateIndex
CREATE INDEX "ProductVariant_colorId_idx" ON "public"."ProductVariant"("colorId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_productId_memoryId_colorId_key" ON "public"."ProductVariant"("productId", "memoryId", "colorId");

-- AddForeignKey
ALTER TABLE "public"."ProductVariant" ADD CONSTRAINT "ProductVariant_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "public"."Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
