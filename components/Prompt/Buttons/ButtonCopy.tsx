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
      className={`promptBtn ${
        isCopied ? "bg-indigo-400 text-white" : "border-2 border-indigo-400 text-indigo-400"
      }`}
      onClick={handleClick}
    >
      {isCopied ? <LuCopyCheck /> : <FiCopy />}
    </button>
  );
}

export default ButtoCopy;
