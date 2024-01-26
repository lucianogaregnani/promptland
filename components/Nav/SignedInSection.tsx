"use client";

import { IoIosAdd } from "react-icons/io";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function SignedInSection({ imageUrl }: { imageUrl: string }) {
  return (
    <section className="flex gap-2">
      <button className="fixed bottom-5 right-6 sm:transparent-normal-btn sm:static">
        <span className="hidden sm:block">Create Prompt</span>
        <span className="block sm:hidden text-5xl text-white bg-indigo-500 rounded-full">
          <IoIosAdd />
        </span>
      </button>
      <button className="redBtn" onClick={() => signOut()}>
        Sign out
      </button>
      <Link href="">
        <Image
          src={imageUrl}
          alt="Profile picture"
          width={45}
          height={45}
          className="rounded-full"
        />
      </Link>
    </section>
  );
}

export default SignedInSection;
