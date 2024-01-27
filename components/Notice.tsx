"use client"

import { useSession } from "next-auth/react";

function Notice() {
  const { data:session } = useSession()

  return (
    <div className="text-slate-500 border-2 rounded-full py-1 px-5">
      {session ? "Create and" : "Sign in to"} share your own{" "}
      <span className="text-indigo-500 font-medium">prompts!</span>
    </div>
  );
}

export default Notice;
