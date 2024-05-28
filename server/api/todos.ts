import { defineEventHandler } from "h3";
import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const todos = await prisma.todos.findMany();
  return todos;
});
