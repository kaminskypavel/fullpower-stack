import { initTRPC } from "@trpc/server";
import { Context, defaultCreateContextOptions } from "./context";
import { isAuthedMiddleware } from "./isAuthedMiddleware";
import { loggerMiddleware } from "./loggerMiddleware";

const t = initTRPC.context<Context>().create(defaultCreateContextOptions);

/**
 * Create a router
 * @see https://trpc.io/docs/v10/router
 */
export const router = t.router;

/**
 * @see https://trpc.io/docs/v10/merging-routers
 */
export const mergeRouters = t.mergeRouters;

const middleware = t.middleware;
/**
 * Unprotected procedure
 **/
export const publicProcedure = t.procedure.use(middleware(loggerMiddleware));

/**
 * Protected procedure
 **/
export const protectedProcedure = t.procedure
  .use(loggerMiddleware)
  .use(isAuthedMiddleware);
