import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getProducts = cache(
  async () => {
    const products = await db.product.findMany({
      include: {
        variants: {
          include: {
            memory: true,
          },
        },
      },
    });
    return products;
  },
  ["products"],
  { revalidate: 3600 }
);
