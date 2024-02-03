async function getPrompts() {
  return fetch(`${process.env.URL || ""}/api/prompt`, { next:{ tags:['prompts'] } }).then((res) => res.json());
}

export default getPrompts;
