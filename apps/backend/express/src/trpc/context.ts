import { faker } from "@faker-js/faker";
import * as trpc from "@trpc/server";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

//eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreateContextOptions {
  // session: Session | null
}

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 */
export async function createContextInner(
  _opts: CreateContextOptions & CreateExpressContextOptions
) {
  const req = _opts.req;
  const res = _opts.res;

  const session = {
    user: {
      email: faker.internet.email(),
      name: faker.name.firstName(),
      id: faker.random.alphaNumeric(10),
    },
  };

  return {
    req,
    res,
    session,
  };
}

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<Context> {
  // for API-response caching see https://trpc.io/docs/caching

  return await createContextInner(opts);
}

export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;
