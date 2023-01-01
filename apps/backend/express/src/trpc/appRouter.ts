import { Database } from "@fullpower-stack/database";
import {
  addUserSchemaInput,
  getCatImageInputSchema,
  getCatImageOutputSchema,
} from "@fullpower-stack/schema";
import { z } from "zod";
import { getCatImage } from "../controllers/cat";
import { postRouter } from "./post";
import { protectedProcedure, publicProcedure, router } from "./trpc";

const db = new Database();

export const appRouter = router({
  cat: publicProcedure
    .input(getCatImageInputSchema)
    .query(async ({ input }) => {
      const apiResult = await getCatImage(input?.text);
      return apiResult as z.infer<typeof getCatImageOutputSchema>;
    }),
  post: postRouter,
  list: publicProcedure.query(async () => {
    const users = await db.listUsers(true);
    return { ok: true, isAdmin: false, users };
  }),

  admin: protectedProcedure.query(() => {
    return { ok: true, isAdmin: true };
  }),

  createUser: protectedProcedure
    .input(addUserSchemaInput)
    .mutation(async (req) => {
      const { name, email } = req.input;
      const user = await db.createUser(name, email);

      return user;
    }),
});

export type AppRouter = typeof appRouter;
