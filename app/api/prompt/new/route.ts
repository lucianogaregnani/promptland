import Prompt from "@/models/Prompt.model";
import { revalidatePath } from "next/cache";

export const POST = async (request: Request) => {
  const body = await request.json();
  const { title, prompt, tags, creator } = body;

  try {
    const newPrompt = await Prompt.create({
      title,
      prompt,
      tags,
      creator,
    });

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a prompt", { status: 500 });
  }
};
