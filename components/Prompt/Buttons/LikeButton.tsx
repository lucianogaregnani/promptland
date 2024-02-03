/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import useLikeButton from "@/hooks/useLikeButton";
import { IPrompt } from "@/types/prompt.types";
import { useSession } from "next-auth/react";
import { FaHeart } from "react-icons/fa";

function LikeButton({ prompt }: { prompt: IPrompt }) {
  const { data: session } = useSession();
  const { isLikedButton, addLikedPrompt } = useLikeButton(prompt, session?.user.id || "");

  return (
    session && (
      <button
        onClick={addLikedPrompt}
        className={`text-2xl ${
          isLikedButton ? "text-red-500" : "text-slate-300"
        } transition-all`}
      >
        <FaHeart />
      </button>
    )
  );
}

export default LikeButton;
