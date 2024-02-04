import Prompt from "@/models/Prompt.model";
import connectToDB from "@/utils/database";

export const GET = async (
  _request: Request,
  { params: { id } }: { params: { id?: string } }
) => {
    try {
        await connectToDB()
        let promptFinded
        console.log({id})
        if(id !== "-1") {
            promptFinded = await Prompt.find({ creator:id }).populate("creator")
        } else {
            promptFinded = await Prompt.find({}).populate("creator")
        }

        return new Response(JSON.stringify(promptFinded), { status:200 })
    } catch (error:any) {
        return new Response(JSON.stringify({error:error.message}), { status:500 })
    }

};
