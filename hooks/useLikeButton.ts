/* eslint-disable react-hooks/exhaustive-deps */
import { IPrompt } from "@/types/prompt.types";
import {
  addPromptToLocalStorage,
  getLikedPrompts,
  removePromptToLocalStorage,
} from "@/utils/localStorage";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

function useLikeButton(prompt:IPrompt) {
  const { data: session } = useSession();
  const [isLikedButton, setIsLikedButton] = useState(false);

  useEffect(() => {
    setIsLikedButton(
      !!getLikedPrompts(session?.user.id || "").find((promptMap) => (promptMap._id === prompt._id))
    );
  }, [session]);

  const addLikedPrompt = (prompt: IPrompt) => {
    if (!getLikedPrompts(session?.user.id || "").find((promptMap) => promptMap._id === prompt._id)) {
      addPromptToLocalStorage(prompt, session?.user.id || "");
      setIsLikedButton(true);
    } else {
      removePromptToLocalStorage(prompt, session?.user.id || "");
      setIsLikedButton(false);
    }
  };

  return { isLikedButton, addLikedPrompt };
}

export default useLikeButton;
