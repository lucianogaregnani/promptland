"use client";

import { useSession } from "next-auth/react";
import SignInButton from "./SignInButton";
import SignedInSection from "./SignedInSection";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

function Nav() {
  const { data: session } = useSession();

  return (
    <nav className="fixed z-10 top-0 w-full flex justify-between p-4 items-center sm:backdrop-blur-[1px]">
      <Link
        className="flex gap-2 text-2xl font-semibold bg-white sm:bg-transparent sm:shadow-none shadow-sm p-3 rounded-full sm:bg-none sm:p-0"
        href="/"
      >
        <Image height={35} width={35} alt="logo" src={logo} />
        <p className="sm:block hidden">
          prompt<span className="text-indigo-500">land</span>
        </p>
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
