export interface IUser {
    _id: string,
    username:string,
    image:string,
    email:string
}

export interface IPrompt {
    _id:string,
    title: string,
    prompt: string,
    tags:string,
    creator?: IUser
}