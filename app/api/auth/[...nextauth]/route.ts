import NextAuth, { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { SignInParams } from "@/types/nextAuth.types";
import connectToDB from "@/utils/database";
import User from "@/models/User.model";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session }: { session: Session }) {
      const user = await User.findOne({ email:session.user?.email })

      session.user.id = user._id.toString()

      return session;
    },
    async signIn(params: SignInParams) {
      try {
        await connectToDB();

        const user = await User.findOne({ email: params.profile?.email });

        if (!user) {
          const newUser = await User.create({
            email: params.user?.email,
            username: params.user?.name?.toLocaleLowerCase().replace(" ", ""),
            image: params.user?.image,
          });
          console.log(newUser)
        }

        return true;
      } catch (error: any) {
        console.log({error: error.message});
        return false;
      }
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
