import { defineEventHandler } from "h3";
import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
  try {
    const body: Product = await readBody(event);
    const user = await prisma.products.create({
      data: body,
    });
    setResponseStatus(event, 201);
    return user;
  } catch (error) {
    console.error(error);
    return createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
