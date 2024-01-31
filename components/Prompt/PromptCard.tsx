import Image from "next/image";
import Link from "next/link";

import ButtonCopy from "./Buttons/ButtonCopy";
import ButtonDelete from "./Buttons/ButtonDelete";
import EditButton from "./Buttons/EditButton";

interface PromptCardProps {
  imageUrl: string;
  name: string;
  prompt: string;
  tags: string;
  email: string;
  title: string;
  userId: string;
  promptId: string;
}

function PromptCard({
  imageUrl,
  name,
  prompt,
  tags,
  email,
  title,
  userId,
  promptId,
}: PromptCardProps) {
  return (
    <article className="flex flex-col gap-2 w-[27rem] p-4 rounded-2xl border-2">
      <header className="flex justify-between">
        <Link href="" className="flex gap-2">
          <Image
            src={imageUrl}
            alt={`${name}'s profile picture`}
            height={50}
            width={50}
            className="rounded-full"
          />
          <div>
            <h5 className="font-bold text-md">{name}</h5>
            <p className="text-slate-400">{email}</p>
          </div>
        </Link>
        <div className="flex gap-2 items-start">
          <ButtonDelete userId={userId} promptId={promptId} />
          <EditButton promptId={promptId} />
          <ButtonCopy textToCopy={prompt} />
        </div>
      </header>
      <div>
        <h4 className="font-bold text-xl text-slate-500">{title}</h4>
        <p className="text-md">{prompt}</p>
        <Link href={`/?query=${tags.replace('#', '')}`}>
          <p className="text-lg text-tags-gradient font-semibold">{tags}</p>
        </Link>
      </div>
    </article>
  );
}

export default PromptCard;
