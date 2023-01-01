import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { appRouter } from "./trpc/appRouter";
import { Express } from "express";
import { createContext } from "./trpc/context";

const app: Express = express();
app.use(cors());

app.get("/", (_req, res) => {
  res.send("Hello World 👋");
});

app.use(
  "/trpc",
  (_res, _req, next) => {
    next();
  },
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
    onError({ error }) {
      if (error.code === "INTERNAL_SERVER_ERROR") {
        // send to bug reporting
        console.error("Something went wrong", error);
      }
    },
    /**
     * Enable query batching
     */
    batching: {
      enabled: false,
    },
  })
);

export default app;
