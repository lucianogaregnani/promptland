import Prompt from "@/models/Prompt.model";
import connectToDB from "@/utils/database";
import { revalidatePath } from "next/cache";

export const PATCH = async (
  request: Request,
  { params: { id } }: { params: { id: string } }
) => {
  const body = await request.json();
  const { prompt, tags, title } = body;

  try {
    await connectToDB();

    const updatedUser = await Prompt.findByIdAndUpdate(id, {
      prompt,
      tags,
      title,
    });

    return new Response(JSON.stringify(updatedUser), { status: 201 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  }
};
