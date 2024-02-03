async function getPrompts() {
  return fetch(`${process.env.URL || ""}/api/prompt`, { cache:"no-store" }).then((res) => res.json());
}

export default getPrompts;
