/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useState } from "react";
import ListOfPrompts from "../Prompt/ListOfPrompts";
import { IPrompt } from "@/types/prompt.types";
import { getLikedPrompts } from "@/utils/localStorage";

function ListOfFavoritePrompts({ userId }:{ userId:string }) {
    const [prompts, setPrompts] = useState<IPrompt[]>([])
    
    useEffect(() => {
        setPrompts(getLikedPrompts(userId))
    }, [])

    return (
        prompts.length ?
        <ListOfPrompts prompts={prompts}/> :
        <p className="text-2xl mt-4 font-medium">You dont have favorite prompts</p>
    );
}

export default ListOfFavoritePrompts;