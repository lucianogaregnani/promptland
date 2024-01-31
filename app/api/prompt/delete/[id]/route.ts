import Prompt from "@/models/Prompt.model";
import connectToDB from "@/utils/database";
import { revalidatePath } from "next/cache";

export const DELETE = async (
  _request: Request,
  { params: { id } }: { params: { id: string } }
) => {
    try {
        await connectToDB()
        
        const deletedUser = await Prompt.findByIdAndDelete(id)

        revalidatePath('/')

        return new Response(JSON.stringify(deletedUser), { status: 200 })
    } catch (error:any) {
        return new Response(JSON.stringify({ error:error.message }), { status:404 })
    }
};
