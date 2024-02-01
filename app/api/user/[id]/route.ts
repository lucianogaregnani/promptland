import User from "@/models/User.model";
import connectToDB from "@/utils/database";

export const GET = async (
  _request: Request,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    const user = await User.findById(id);

    if (!user) throw new Error("User don't exist");

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
