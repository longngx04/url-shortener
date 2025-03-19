import {z} from 'zod';

export const urlSchema = z.object({
    url: z.string().url("Please enter a valid URL"),
})
export type urlFormData = z.infer<typeof urlSchema>;