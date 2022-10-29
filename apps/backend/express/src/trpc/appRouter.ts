import {Database} from "@fullpower-stack/database";
import {z} from "zod";
import {getCatImage} from '../controllers/cat';
import {protectedProcedure, publicProcedure, router} from './trpc';
import {addUserSchema} from '@fullpower-stack/schema';

const db = new Database();


export const appRouter = router({
  cat: publicProcedure.input(
    z.object({
      text: z.string()
    }).optional()
  )
    .query(async ({ctx, input}) => {

      const image = await getCatImage(input?.text);
      return {
        image,
        timestamp: Date.now(),
        file: JSON.stringify(ctx?.session)
      };
    }),

  list: publicProcedure.query(async (req) => {
    const users = await db.listUsers(true);
    return {ok: true, isAdmin: false, users};
  }),

  admin: protectedProcedure.query((req) => {
    return {ok: true, isAdmin: true};
  }),

  createUser: protectedProcedure
    .input(addUserSchema)
    .mutation(async (req) => {
      const {name, email} = req.input;
      const user = await db.createUser(name, email);

      return user;
    }),
});

export type AppRouter = typeof appRouter;
