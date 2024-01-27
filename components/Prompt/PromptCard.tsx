import Image from "next/image";

interface PromptCardProps {
    imageUrl: string,
    name: string,
    prompt:string,
    tags:string,
    userId:string
}

function PromptCard({ imageUrl, name, prompt, tags, userId }:PromptCardProps) {

    return (
        <article>
            <Image src={imageUrl} alt={`${name}'s profile picture`} height={24} width={24}/>
            <h1>{name}</h1>
            <p>{prompt}</p>
            <p>{tags}</p>
        </article>
    );
}

export default PromptCard;