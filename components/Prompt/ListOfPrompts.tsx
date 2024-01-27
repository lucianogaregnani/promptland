import { IPrompt } from "@/types/prompt.types";
import PromptCard from "./PromptCard";
import { useEffect, useState } from "react";
import getPrompts from "@/services/getPrompts.service";

async function ListOfPrompts() {
  const prompts: IPrompt[] = await getPrompts();

  return (
    <section>
      {prompts?.map((promptMap) => {
        const { _id, creator, prompt, tags } = promptMap;
        return (
          <PromptCard
            key={_id}
            imageUrl={creator.image}
            name={creator.username}
            prompt={prompt}
            tags={tags}
            userId={creator._id}
          />
        );
      })}
    </section>
  );
}

export default ListOfPrompts;
