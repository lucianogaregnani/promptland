/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import deletePrompt from "@/services/deletePrompt.service";
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
  const pathname = usePathname();

  const handleClick = async () => {
    setIsLoading(true);
    await deletePrompt(promptId);
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
