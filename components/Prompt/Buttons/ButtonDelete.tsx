/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { revalidatePage } from "@/actions/revalidatePage";
import deletePrompt from "@/services/deletePrompt.service";
import { removePromptToLocalStorage } from "@/utils/localStorage";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

function ButtonDelete({
  userId,
  promptId,
}: {
  userId: string;
  promptId: string;
}) {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await deletePrompt(promptId);
    await revalidatePage()
    removePromptToLocalStorage(promptId, userId)
    setIsLoading(false);
  };

  return (
    session?.user.id === userId && (
      <button
        onClick={handleClick}
        className="promptBtn bg-red-500 text-white/60 hover:bg-red-400"
      >
        {isLoading ? <p>...</p> : <MdOutlineDeleteOutline />}
      </button>
    )
  );
}

export default ButtonDelete;
