import {inferAsyncReturnType} from '@trpc/server';
import {CreateContextOptions} from 'vm';
import {faker} from '@faker-js/faker';
/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */

export async function createContext(opts: CreateContextOptions) {
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
