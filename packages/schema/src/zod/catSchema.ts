import { z } from "zod";

export const getCatImageInputSchema = z.object({
  text: z.string().optional(),
});

export const getCatImageOutputSchema = z.object({
  tags: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
  validated: z.boolean(),
  owner: z.null(),
  file: z.string(),
  mimetype: z.string(),
  size: z.number(),
  _id: z.string(),
  url: z.string(),
});
