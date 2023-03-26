import { PrismaClient } from '@prisma/client';

// @ts-ignore
const prisma = globalThis.prisma || new PrismaClient();

// @ts-ignore
if (process.env.NODE_ENV === 'development') globalThis.prisma = prisma;

export * from '@prisma/client';
export default prisma;
