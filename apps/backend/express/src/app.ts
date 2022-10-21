import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import {appRouter} from "./appRouter";
import {Express} from "express"
const PORT = 4000;

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context

const app: Express = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use(
  "/trpc",
  (res, req, next) => {
    console.log("/trpc middleware called");
    next();
  },
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

export default app;
