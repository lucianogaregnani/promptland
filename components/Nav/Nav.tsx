"use client";

import { useSession } from "next-auth/react";
import SignInButton from "./SignInButton";
import SignedInSection from "./SignedInSection";
import Link from "next/link";

function Nav() {
  const { data: session } = useSession();

  return (
    <nav className="fixed z-10 top-0 w-full flex justify-between p-4 items-center sm:backdrop-blur-[1px]">
      <Link className="text-2xl font-semibold bg-white sm:bg-transparent sm:shadow-none shadow-sm p-3 rounded-full sm:bg-none sm:p-0" href="/">
        prompt<span className="text-indigo-500">land</span>
      </Link>
      {session ? (
        <SignedInSection imageUrl={session.user?.image || ""} />
      ) : (
        <SignInButton />
      )}
    </nav>
  );
}

export default Nav;
