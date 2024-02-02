/* eslint-disable react-hooks/exhaustive-deps */
import { IPrompt } from "@/types/prompt.types";
import {
  addPromptToLocalStorage,
  getLikedPrompts,
  removePromptToLocalStorage,
} from "@/utils/localStorage";
import { useEffect, useState } from "react";

function useLikeButton(prompt: IPrompt, userId: string) {
  const [isLikedButton, setIsLikedButton] = useState(false);

  const promptFinded = getLikedPrompts(userId).find(
    (promptMap) => promptMap._id === prompt._id
  );

  useEffect(() => {
    setIsLikedButton(!!promptFinded);
  }, [userId]);

  const addLikedPrompt = (prompt: IPrompt) => {
    if (!promptFinded) {
      addPromptToLocalStorage(prompt, userId);
      setIsLikedButton(true);
    } else {
      removePromptToLocalStorage(prompt, userId);
      setIsLikedButton(false);
    }
  };

  return { isLikedButton, addLikedPrompt };
}

export default useLikeButton;
