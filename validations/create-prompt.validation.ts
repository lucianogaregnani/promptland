import { z } from "zod";

const CreatePromptSchema = z.object({
    title: z.string().min(3, {
        message: "The title must contain at least 3 characters"
    }).max(15, {
        message: "The title must be less than 15 characters"
    }),
    prompt: z.string().min(10, {
        message: "The prompt must contain at least 10 character"
    }).max(200, {
        message: "The prompt must be less than 200 characters"
    }), 
    tags: z.string()
})

export type CreatePromptSchemaType = z.infer<typeof CreatePromptSchema>
export default CreatePromptSchema