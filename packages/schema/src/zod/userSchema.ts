import { z } from "zod";

export const addUserSchemaInput = z.object({
  name: z.string().min(5),
  email: z.string().email(),
});
