import { PrismaClient } from "@prisma/client";

declare global {
  // globalThis üzerinde prisma tipini tanımlıyoruz
  var prisma: PrismaClient | undefined;
}

export const prismadb =
  globalThis.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;
