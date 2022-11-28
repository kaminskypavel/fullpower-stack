import { initTRPC } from "@trpc/server";
import { Context } from "./context";
import { isAuthedMiddleware } from "./isAuthedMiddleware";
import { loggerMiddleware } from "./loggerMiddleware";

const t = initTRPC.context<Context>().create();

export const middleware = t.middleware;
export const router = t.router;

/**
 * Unprotected procedure
 **/
export const publicProcedure = t.procedure.use(loggerMiddleware);

/**
 * Protected procedure
 **/
export const protectedProcedure = t.procedure
  .use(loggerMiddleware)
  .use(isAuthedMiddleware);
