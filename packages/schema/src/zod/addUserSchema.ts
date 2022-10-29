import {z} from 'zod';

export const addUserSchema = z.object({
    name: z.string().min(5),
    email: z.string().email(),
})
