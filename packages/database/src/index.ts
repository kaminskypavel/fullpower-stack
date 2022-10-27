import {PrismaClient} from '@prisma/client'
import {faker} from "@faker-js/faker";

export class Database {
    #prisma: PrismaClient;

    constructor() {
        this.#prisma = new PrismaClient();
    }

    async $disconnect() {
        await this.#prisma.$disconnect();
    }

    async listUsers() {
        const users = await this.#prisma.user.findMany();
        return users;
    }

    async createUser() {
        const user = await this.#prisma.user.create({
            data: {
                email: faker.internet.email(),
                name: faker.name.firstName(),
            }
        });
        return user;
    }

}
