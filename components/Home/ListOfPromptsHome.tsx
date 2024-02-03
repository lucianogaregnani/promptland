import ListOfPrompts from "../Prompt/ListOfPrompts";
import PromptsSkeleton from "@/Skeletons/PromptsSkeleton";
import getPrompts from "@/services/getPrompts.service";
import { Suspense } from "react";
import { filterPrompts } from "@/utils/filterPrompt";
import getPromptsByUserId from "@/services/getPromptsByUserId.service";

async function ListOfPromptsHome({ query }: { query: string }) {
  const prompts = await getPromptsByUserId("65b3fecc1951fc76fe77ef15");

  const filteredPrompts = query ? filterPrompts(prompts, query) : prompts;

  return (
    <Suspense fallback={<PromptsSkeleton cards={3} />}>
      <ListOfPrompts prompts={filteredPrompts} />
    </Suspense>
  );
}

export default ListOfPromptsHome;
