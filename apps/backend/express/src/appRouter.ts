import {initTRPC} from "@trpc/server";
import axios from "axios";
import {z} from "zod";

export const t = initTRPC.create();

export const appRouter = t.router({
  cat: t.procedure.input(
    z.object({
      text: z.string()
    }).optional()
  )
    .query(async (req) => {
      const text = req.input?.text ?? "hello";
      const {data} = await axios.get(`https://cataas.com/cat/says/${text}?json=true`)
      return {image: `https://cataas.com/${data.url}`, timestamp: Date.now(), file: data.file};
    }),
  test: t.procedure.query((req) => {
    console.log(req);
    return {ok: true};
  }),
  createUser: t.procedure
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
