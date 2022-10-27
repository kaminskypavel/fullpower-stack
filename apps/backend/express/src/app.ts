import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import {appRouter} from "./trpc/appRouter";
import {Express} from "express"
import {createContext} from "./trpc/context";

const app: Express = express();
app.use(cors());

app.use(
  "/trpc",
  (res, req, next) => {
    next();
  },
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    createContext,
  })
);

export default app;
