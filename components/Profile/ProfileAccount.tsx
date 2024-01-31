import Image from "next/image";
import LikedPromptsButton from "./Buttons/LikedPromptsButton";
import PromptsButton from "./Buttons/PromptsButton";
import Buttons from "./Buttons/Buttons";

interface ProfileAccountProps {
  image: string;
  username: string;
  email: string;
}

function ProfileAccount({ image, username, email }: ProfileAccountProps) {
  return (
    <section className="max-w-3xl m-auto">
      <header className="flex justify-center items-center gap-2">
        <Image
          width={90}
          height={90}
          alt={`${username}'s profile picture`}
          src={image}
          className="rounded-full"
        />
        <div>
          <h1 className="text-4xl font-semibold">{username}</h1>
          <h2 className="text-slate-400 text-xl">{email}</h2>
        </div>
      </header>
      <main>
        <Buttons />
      </main>
    </section>
  );
}

export default ProfileAccount;
