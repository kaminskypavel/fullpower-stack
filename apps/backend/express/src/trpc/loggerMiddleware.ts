import pino from "pino";

const logger = pino({
  name: "express-trpc-server",
  level: "debug",
});

export const loggerMiddleware = async ({
  path,
  type,
  input,
  next,
}: {
  path: any;
  type: any;
  input: any;
  next: any;
}) => {
  const result = await next();
  result.ok
    ? logger.debug({ path, type, input }, "✅")
    : logger.debug({ path, type, input }, "❌");
  return result;
};
