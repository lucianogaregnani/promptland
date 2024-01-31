import Prompt from "@/models/Prompt.model";
import connectToDB from "@/utils/database";

export const GET = async (
  _request: Request,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(id);

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error:any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  }
};
