import {z} from "zod";
import {protectedProcedure, publicProcedure, router} from './trpc';
import {getCatImage} from '../controllers/cat';
import {Database} from "@fullpower-stack/database";

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

  test: publicProcedure.query(async (req) => {
    const user = await db.createUser();

    return {ok: true, isAdmin: false, user};
  }),
  list: publicProcedure.query(async (req) => {
    const users = await db.listUsers();
    return {ok: true, isAdmin: false, users};
  }),

  admin: protectedProcedure.query((req) => {
    return {ok: true, isAdmin: true};
  }),

  createUser: protectedProcedure
    .input(z.object({name: z.string().min(5)}))
    .mutation(async (req) => {
      // use your ORM of choice
      // return await UserModel.create({
      //   data: req.input,
      // });

      return {id: "1", name: "Bilbo"};
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
