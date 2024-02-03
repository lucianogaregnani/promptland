import Prompt from "@/models/Prompt.model"
import connectToDB from "@/utils/database"


export const GET = async () => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({}).populate('creator')

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error:any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }
} 