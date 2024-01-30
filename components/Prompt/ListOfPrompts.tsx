import { IPrompt } from "@/types/prompt.types";
import PromptCard from "./PromptCard";
import getPrompts from "@/services/getPrompts.service";

async function ListOfPrompts() {
  const prompts: IPrompt[] = await getPrompts();

  return (
    <section className="absolute top-0 flex flex-wrap justify-center gap-3 w-full">
      {prompts?.map((promptMap) => {
        const { _id, creator, prompt, tags, title } = promptMap;
        return (
          <PromptCard
            key={_id}
            title={title}
            imageUrl={creator.image}
            name={creator.username}
            email={creator.email}
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
