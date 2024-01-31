import { IPrompt } from "@/types/prompt.types";

export function filterPrompts(prompts: IPrompt[], search: string) {
  return prompts.filter((prompt) => filterPrompt(prompt, search));
}

export function filterPrompt(prompt: IPrompt, search: string) {
  return (
    prompt.prompt.includes(search) ||
    prompt.tags.includes(search) ||
    prompt.title.includes(search) ||
    prompt.creator?.username.includes(search)
  );
}
