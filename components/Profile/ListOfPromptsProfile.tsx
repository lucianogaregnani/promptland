import ListOfPrompts from "../Prompt/ListOfPrompts";
import { Suspense } from "react";
import PromptsSkeleton from "@/Skeletons/PromptsSkeleton";
import getPrompts from "@/services/getPrompts.service";

async function ListOfPromptsProfile({ userId }:{ userId:string }) {
  const prompts = await getPrompts(userId) 

  return (
    <Suspense fallback={<PromptsSkeleton cards={3} />}>
        <ListOfPrompts prompts={prompts} />
    </Suspense>
  );
}

export default ListOfPromptsProfile;
