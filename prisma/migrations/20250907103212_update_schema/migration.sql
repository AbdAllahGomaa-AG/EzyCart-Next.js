-- CreateEnum
CREATE TYPE "public"."MemorySize" AS ENUM ('SIZE_256', 'SIZE_512', 'SIZE_1024');

-- CreateEnum
CREATE TYPE "public"."Color" AS ENUM ('RED', 'GREEN', 'BLUE');

-- AlterTable
ALTER TABLE "public"."Product" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;

-- CreateTable
CREATE TABLE "public"."ProductVariant" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "memoryId" TEXT NOT NULL,
    "color" "public"."Color" NOT NULL,
    "price" DOUBLE PRECISION,
    "sku" TEXT,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Memory" (
    "id" TEXT NOT NULL,
    "name" "public"."MemorySize" NOT NULL,
    "order" INTEGER,

    CONSTRAINT "Memory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_sku_key" ON "public"."ProductVariant"("sku");

-- CreateIndex
CREATE INDEX "ProductVariant_productId_idx" ON "public"."ProductVariant"("productId");

-- CreateIndex
CREATE INDEX "ProductVariant_memoryId_idx" ON "public"."ProductVariant"("memoryId");

-- CreateIndex
CREATE INDEX "ProductVariant_color_idx" ON "public"."ProductVariant"("color");

-- CreateIndex
CREATE UNIQUE INDEX "ProductVariant_productId_memoryId_color_key" ON "public"."ProductVariant"("productId", "memoryId", "color");

-- CreateIndex
CREATE UNIQUE INDEX "Memory_name_key" ON "public"."Memory"("name");

-- AddForeignKey
ALTER TABLE "public"."ProductVariant" ADD CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductVariant" ADD CONSTRAINT "ProductVariant_memoryId_fkey" FOREIGN KEY ("memoryId") REFERENCES "public"."Memory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
