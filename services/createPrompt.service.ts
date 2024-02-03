interface CreatePromptParams {
    title: string,
    prompt:string,
    tags:string,
    userId:string | undefined
}

async function createPrompt({ title, prompt, tags, userId }:CreatePromptParams) {
  const response = await fetch(`/api/prompt/new`, {
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
  })

  return response
}

export default createPrompt;
