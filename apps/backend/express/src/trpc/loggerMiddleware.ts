import { initTRPC } from "@trpc/server";
import { Context } from "./context";
import pino from "pino";

const logger = pino({
  name: "express-trpc-server",
  level: "debug",
});

export const t = initTRPC.context<Context>().create();

export const loggerMiddleware = t.middleware(
  async ({ path, type, input, next }) => {
    const result = await next();
    result.ok
      ? logger.debug({ path, type, input }, "✅")
      : logger.debug({ path, type, input }, "❌");
    return result;
  }
);
