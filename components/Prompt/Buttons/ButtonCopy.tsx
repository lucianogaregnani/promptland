"use client";

import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { LuCopyCheck } from "react-icons/lu";

function ButtoCopy({ textToCopy }:{ textToCopy:string }) {
  const [isCopied, setIsCopied] = useState("");

  const handleClick = () => {
    setIsCopied(textToCopy);
    navigator.clipboard.writeText(textToCopy)
    setTimeout(() => {
      setIsCopied("");
    }, 3000);
  };

  return (
    <button
      className={`w-8 h-8 flex items-center justify-center p-2 rounded-full ${
        isCopied ? "bg-indigo-400 text-white" : "border-2 border-indigo-400 text-indigo-400"
      } transition-all`}
      onClick={handleClick}
    >
      {isCopied ? <LuCopyCheck /> : <FiCopy />}
    </button>
  );
}

export default ButtoCopy;
