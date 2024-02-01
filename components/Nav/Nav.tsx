"use client";

import { useSession } from "next-auth/react";
import SignInButton from "./SignInButton";
import SignedInSection from "./SignedInSection";
import Link from "next/link";

function Nav() {
  const { data: session } = useSession();

  return (
    <nav className="fixed z-20 top-0 w-full flex justify-between p-6 items-center">
      <Link className="text-2xl font-semibold" href="/">
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
