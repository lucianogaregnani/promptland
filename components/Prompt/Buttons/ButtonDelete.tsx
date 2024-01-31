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

  const handleClick = () => {
      setIsLoading(true);
      deletePrompt(promptId).then((res) => res.ok && setIsLoading(false));
  };

  return (
    session?.user.id === userId && (
      <button
        onClick={handleClick}
        className="w-8 h-8 flex items-center justify-center bg-red-500 p-2 text-white/60 rounded-full hover:bg-red-400 transition-all"
      >
        {
            isLoading ? <p>...</p>: <MdOutlineDeleteOutline />
        }
      </button>
    )
  );
}

export default ButtonDelete;
