import {PrismaClient} from '@prisma/client'
import {faker} from "@faker-js/faker";

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: faker.name.fullName(),
            email: faker.internet.email(),
        },
    })
    console.log(user)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })