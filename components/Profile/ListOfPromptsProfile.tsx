import ListOfPrompts from "../Prompt/ListOfPrompts";
import { Suspense } from "react";
import PromptsSkeleton from "@/Skeletons/PromptsSkeleton";
import getPromptsByUserId from "@/services/getPromptsByUserId.service";

async function ListOfPromptsProfile({ userId }:{ userId:string }) {
  const prompts = await getPromptsByUserId(userId) 

  return (
    <Suspense fallback={<PromptsSkeleton cards={3} />}>
      {
        <ListOfPrompts prompts={prompts} />
      }
    </Suspense>
  );
}

export default ListOfPromptsProfile;
