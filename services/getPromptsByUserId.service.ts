async function getPromptsByUserId(userId:string) {
    return fetch(`${process.env.URL || ""}/api/prompt/user/${userId}`, { cache:"no-store" }).then(res => res.json());
}

export default getPromptsByUserId;