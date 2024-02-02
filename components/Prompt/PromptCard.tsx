import Image from "next/image";
import Link from "next/link";

import ButtonCopy from "./Buttons/ButtonCopy";
import ButtonDelete from "./Buttons/ButtonDelete";
import EditButton from "./Buttons/EditButton";

import LikeButton from "./Buttons/LikeButton";

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
    <article className="relative flex justify-between gap-2 w-[22rem] sm:w-[23rem] p-4 rounded-2xl border-2">
      <div className="flex flex-col gap-2 justify-around">
        <header className="flex justify-between">
          <Link href={`/profile/${userId}`} className="flex gap-2">
            <Image
              src={imageUrl}
              alt={`${name}'s profile picture`}
              height={50}
              width={50}
              className="rounded-full"
              placeholder="blur"
              blurDataURL="./assets/blurImage.png"
            />
            <div>
              <h5 className="font-bold text-sm sm:text-md">{name}</h5>
              <p className="text-slate-400 text-sm sm:text-md">{email}</p>
            </div>
          </Link>
        </header>
        <div>
          <h4 className="font-bold text-xl text-slate-500">{title}</h4>
          <p className="text-md h-[4.5rem] overflow-y-auto scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thin">{prompt}</p>
        </div>
        <div className="flex justify-between">
          <Link href={`/?query=${tags.replace("#", "")}`}>
            <p className="text-lg text-tags-gradient font-semibold">{tags}</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <ButtonDelete userId={userId} promptId={promptId} />
        <EditButton userId={userId} promptId={promptId} />
        <ButtonCopy textToCopy={prompt} />
        <LikeButton
          prompt={{
            _id: promptId,
            title,
            tags,
            prompt,
            creator: {
              _id: userId,
              image: imageUrl,
              email,
              username: name,
            },
          }}
        />
      </div>
    </article>
  );
}

export default PromptCard;
