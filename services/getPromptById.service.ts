async function getPromptById(id:string) {
    return fetch(`/api/prompt/${id}`)
        .then(res => res.json());
}

export default getPromptById;