import { Color, MemorySize } from "@/generated/prisma";

export interface Memory {
  id: string;
  name: MemorySize;
  order?: number | null;
  variants?: ProductVariant[]; 
}

export interface ProductVariant {
  id: string;
  productId: string;
  product?: Product; 
  memoryId: string;
  memory: Memory;
  color: Color;
  price?: number | null;
  sku?: string | null;
  stock: number;
  isActive: boolean;
}

export interface Product {
  id: string;
  name: string;
  description?: string | null;
  image?: string | null;
  price: number;
  createdAt: string; 
  updatedAt: string;
  variants?: ProductVariant[];
}
