import { PrismaClient } from "@prisma/client";

export class Database {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async $disconnect() {
    await this.prisma.$disconnect();
  }

  async listUsers(reverse = false) {
    const users = await this.prisma.user.findMany({
      orderBy: { id: reverse ? "desc" : "asc" },
    });
    return users;
  }

  async createUser(name: string, email: string) {
    const user = await this.prisma.user.create({
      data: {
        email,
        name,
      },
    });
    return user;
  }
}

export * from "@prisma/client";
