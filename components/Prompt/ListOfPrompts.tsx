"use client"

import { IPrompt } from "@/types/prompt.types";
import PromptCard from "./PromptCard";

function ListOfPrompts({
  prompts,
}: {
  prompts: IPrompt[];
}) {
  return (
    <section className="absolute top-0 space-y-4 py-5 sm:columns-2 xl:columns-3 pb-20 sm:pb-4">
      {prompts?.map((promptMap) => {
        const { _id, creator, prompt, tags, title } = promptMap;
        return (
          <PromptCard
            key={_id}
            title={title}
            imageUrl={creator?.image || ""}
            name={creator?.username || ""}
            email={creator?.email || ""}
            prompt={prompt}
            tags={tags}
            userId={creator?._id || ""}
            promptId={_id}
          />
        );
      })}
    </section>
  );
}

export default ListOfPrompts;
