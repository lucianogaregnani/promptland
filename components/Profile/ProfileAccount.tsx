import Image from "next/image";
import Buttons from "./Buttons/Buttons";
import getUserById from "@/services/getUserById.service";
import ListOfPromptsProfile from "./ListOfPromptsProfile";
import ListOfFavoritePrompts from "./ListOfFavoritePrompts";

async function ProfileAccount({
  userId,
  section,
}: {
  userId: string;
  section: string;
}) {
  const user = await getUserById(userId);

  return (
    <section className="m-auto p-4 mt-20">
      <header className="flex justify-center items-center gap-2 sm:flex-row flex-col">
        <Image
          width={90}
          height={90}
          alt={`${user.username}'s profile picture`}
          src={user.image}
          className="rounded-full"
        />
        <div>
          <h1 className="text-4xl font-semibold">{user.username}</h1>
          <h2 className="text-slate-400 text-xl">{user.email}</h2>
        </div>
      </header>
      <main>
        <Buttons />
        <section className="relative pb-2">
          {section === "prompts" ? <ListOfPromptsProfile userId={userId} /> : <ListOfFavoritePrompts userId={userId} />}
        </section>
      </main>
    </section>
  );
}

export default ProfileAccount;
