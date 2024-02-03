import { IUser } from "@/types/prompt.types";

async function getUserById(userId:string):Promise<IUser> {
    return fetch(`${process.env.URL}/api/user/${userId}`)
        .then(res => res.json());
}

export default getUserById;