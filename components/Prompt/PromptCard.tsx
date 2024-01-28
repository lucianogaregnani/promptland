import Image from "next/image";
import Link from "next/link";

interface PromptCardProps {
  imageUrl: string;
  name: string;
  prompt: string;
  tags: string;
  email: string;
  userId: string;
}

function PromptCard({
  imageUrl,
  name,
  prompt,
  tags,
  email,
  userId,
}: PromptCardProps) {
  return (
    <article className="flex flex-col gap-2 w-[25rem] p-5 rounded-2xl border-2">
      <Link href="">
        <header className="flex gap-2">
          <Image
            src={imageUrl}
            alt={`${name}'s profile picture`}
            height={50}
            width={50}
            className="rounded-full"
          />
          <div>
            <h1 className="font-bold">{name}</h1>
            <p className="text-slate-400">{email}</p>
          </div>
        </header>
      </Link>
      <p className="text-lg">{prompt}</p>
      <p className="text-lg text-tags-gradient font-semibold">#{tags}</p>
    </article>
  );
}

export default PromptCard;
