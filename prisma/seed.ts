import { PrismaClient, Prisma } from "../primaApp/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const membersData: Prisma.MemberCreateInput[] = [
  { email: "johndoe@example.com", name: "John Doe", createdAt: new Date() },
  { email: "janedoe@example.com", name: "Jane Doe", createdAt: new Date() },
];

export async function main() {
  for (const m of membersData) {
    await prisma.member.create({ data: m });
  }
}

main();
