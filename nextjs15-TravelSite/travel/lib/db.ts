// lib/db.ts
import { PrismaClient } from "../lib/generated/prisma";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prismadb =
  global.prisma ||
  new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") global.prisma = prismadb;
