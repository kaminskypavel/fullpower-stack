import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import {appRouter} from "./appRouter";

const PORT = 4000;

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

export default app;
