async function getPrompts() {
    return fetch(`${process.env.URL}/api/prompt`, { cache:'no-store', next:{ tags:['prompts'] } }).then(res => res.json())
}

export default getPrompts;