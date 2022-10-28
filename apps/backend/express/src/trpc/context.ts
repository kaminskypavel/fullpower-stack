import {inferAsyncReturnType} from '@trpc/server';
import {faker} from '@faker-js/faker';
/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
import {CreateExpressContextOptions} from '@trpc/server/adapters/express';

export async function createContext(opts?: CreateExpressContextOptions) {
    const session = {
        user: {
            email: faker.internet.email(),
            name: faker.name.firstName(),
            id: faker.random.alphaNumeric(10),
        }
    }

    return {
        session,
    };
}

export type Context = inferAsyncReturnType<typeof createContext>;
