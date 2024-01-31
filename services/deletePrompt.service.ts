async function deletePrompt(id:string) {
    return fetch(`/api/prompt/delete/${id}`, {
        method: 'DELETE'
    })
}

export default deletePrompt;