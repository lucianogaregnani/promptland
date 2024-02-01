import { IPrompt } from "@/types/prompt.types";
import PromptCard from "./PromptCard";
import getPrompts from "@/services/getPrompts.service";
import { filterPrompts } from "@/utils/filterPrompt";

async function ListOfPrompts({
  search,
  userId,
}: {
  search?: string;
  userId?: string;
}) {
  const prompts: IPrompt[] = await getPrompts();

  const filteredPrompts = search
    ? filterPrompts(prompts, search)
    : userId
    ? prompts.filter((prompt) => prompt.creator?._id === userId)
    : prompts;

  return (
    <section className="absolute top-0 flex flex-wrap justify-center gap-3 w-full pb-3">
      {filteredPrompts?.map((promptMap) => {
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
