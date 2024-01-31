interface UpdatePromptParams {
    promptId:string | undefined,
    title:string,
    tags:string,
    prompt:string
}

async function updatePrompt({ promptId, title, tags, prompt }:UpdatePromptParams) {
    return fetch(`/api/prompt/update/${promptId}`, {
        method:'PATCH',
        body: JSON.stringify({
            title,
            tags,
            prompt
        })
    })
}

export default updatePrompt;