import { z } from 'zod'
const shortenUrlSchema = z.object({
    url: z.string().url("Please enter a valid URL"),

})

export async function shortenUrl(){
    
}