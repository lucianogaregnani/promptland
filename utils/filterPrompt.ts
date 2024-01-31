import { IPrompt } from "@/types/prompt.types";

export function filterPrompts(prompts: IPrompt[], search: string) {
  return prompts.filter((prompt) => filterPrompt(prompt, search));
}

export function filterPrompt(prompt: IPrompt, search: string) {
  const searchLower = search.toLocaleLowerCase();

  return (
    prompt.prompt.toLocaleLowerCase().includes(searchLower) ||
    prompt.tags.toLocaleLowerCase().includes(searchLower) ||
    prompt.title.toLocaleLowerCase().includes(searchLower) ||
    prompt.creator?.username.toLocaleLowerCase().includes(searchLower)
  );
}
