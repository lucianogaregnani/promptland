"use client";

import { usePathname } from "next/navigation";

function PromptsButton() {
  const pathname = usePathname();

  return (
    pathname === "/profile" && (
      <button className="text-indigo-500 border-b-2 border-indigo-500 flex-1">
        Prompts
      </button>
    )
  );
}

export default PromptsButton;
