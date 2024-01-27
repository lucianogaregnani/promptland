interface CreatePromptParams {
    title: string,
    prompt:string,
    tags:string,
    userId:string | undefined
}

function createPrompt({ title, prompt, tags, userId }:CreatePromptParams) {
  return fetch(`/api/prompt/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      prompt,
      tags,
      creator: userId,
    }),
  });
}

export default createPrompt;
