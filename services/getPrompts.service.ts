async function getPrompts(userId?: string) {
  return fetch(`${process.env.URL || ""}/api/prompt/user/${userId || "-1"}`, {
    cache: "no-store",
    next: { tags: ["prompts"] },
  }).then((res) => res.json());
}

export default getPrompts;
