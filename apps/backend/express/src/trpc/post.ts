/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { TRPCError } from "@trpc/server";
import { publicProcedure, router } from "./trpc";
import { Database } from "@fullpower-stack/database";
import {
  byIdPostInputSchema,
  createPostInputSchema,
  listPostsInputSchema,
  byIdPostOutputSchema,
} from "@fullpower-stack/schema";
import { z } from "zod";
const db = new Database();
/**
 * Default selector for Post.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */

export const postRouter = router({
  list: publicProcedure.input(listPostsInputSchema).query(async ({ input }) => {
    return db.listPosts(input);
  }),
  byId: publicProcedure.input(byIdPostInputSchema).query(async ({ input }) => {
    const { id } = input;
    const post = await db.findPostById(id);
    if (!post) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: `No post with id '${id}'`,
      });
    }
    return post as z.infer<typeof byIdPostOutputSchema>;
  }),
  add: publicProcedure
    .input(createPostInputSchema)
    .mutation(async ({ input }) => {
      const post = await db.createPost(input);
      return post;
    }),
});
