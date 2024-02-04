import ListOfPrompts from "../Prompt/ListOfPrompts";
import PromptsSkeleton from "@/Skeletons/PromptsSkeleton";
import { Suspense } from "react";
import { filterPrompts } from "@/utils/filterPrompt";
import getPrompts from "@/services/getPrompts.service";

async function ListOfPromptsHome({ query }: { query: string }) {
  const prompts = await getPrompts();

  const filteredPrompts = query ? filterPrompts(prompts, query) : prompts;

  return (
    <Suspense fallback={<PromptsSkeleton cards={3} />}>
      <ListOfPrompts prompts={filteredPrompts} />
    </Suspense>
  );
}

export default ListOfPromptsHome;
