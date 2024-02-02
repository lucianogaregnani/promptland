import { z } from "zod";

const CreatePromptSchema = z.object({
    title: z.string().min(3, {
        message: "The title must contain at least 3 characters"
    }).max(20, {
        message: "The title must be less than 20 characters"
    }),
    prompt: z.string().min(10, {
        message: "The prompt must contain at least 10 character"
    }).max(200, {
        message: "The prompt must be less than 200 characters"
    }), 
    tags: z.string().max(25, {
        message: "The tags must be less than 25 characters"
    })
})

export type CreatePromptSchemaType = z.infer<typeof CreatePromptSchema>
export default CreatePromptSchema