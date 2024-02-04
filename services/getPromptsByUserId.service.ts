async function getPromptsByUserId(userId?: string) {
  return fetch(`${process.env.URL || ""}/api/prompt/user/${userId || ""}`, {
    cache: "no-store",
    next: { tags: ["prompts"] },
  }).then((res) => res.json());
}

export default getPromptsByUserId;
