import { z } from "zod";

export const createPostInputSchema = z.object({
  title: z.string().min(1).max(32),
  content: z.string().min(1).optional(),
  published: z.boolean().optional(),
});

export const byIdPostInputSchema = z.object({
  id: z.number(),
});
export const byIdPostOutputSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
  createdAt: z.date(),
});

export const listPostsInputSchema = z.object({
  limit: z.number().min(1).max(100).optional(),
  cursor: z.number().nullish().default(null),
  skip: z.number().min(0).optional(),
  take: z.number().min(0).optional(),
});
