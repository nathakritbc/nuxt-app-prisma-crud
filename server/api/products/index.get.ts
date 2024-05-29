import { defineEventHandler } from "h3";
import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
  try {
    const products: Product[] = await prisma.products.findMany({
      orderBy: {
        p_id: "desc",
      },
    });
    return products;
  } catch (error) {
    console.error(error);
    return createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
