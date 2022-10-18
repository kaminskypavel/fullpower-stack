import { initTRPC } from "@trpc/server";
import { z } from "zod";

export const t = initTRPC.create();

export const appRouter = t.router({
  test: t.procedure.query((req) => {
    console.log(req);
    return { ok: true };
  }),
  getUsers: t.procedure.query((req) => {
    return { title: "Hello From tRPC Express Server", timestamp: new Date() };
  }),
  createUser: t.procedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async (req) => {
      // use your ORM of choice
      // return await UserModel.create({
      //   data: req.input,
      // });

      return { id: "1", name: "Bilbo" };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
