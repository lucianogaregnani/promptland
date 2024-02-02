async function getPromptsByUserId(userId:string) {
    return fetch(`${process.env.URL || ""}/api/prompt/user/${userId}`).then(res => res.json());
}

export default getPromptsByUserId;