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
      className={`w-8 h-8 flex items-center justify-center p-2 text-white rounded-full ${
        isCopied ? "bg-indigo-400" : "bg-gray-400 hover:bg-gray-500"
      } transition-all`}
      onClick={handleClick}
    >
      {isCopied ? <LuCopyCheck /> : <FiCopy />}
    </button>
  );
}

export default ButtoCopy;
