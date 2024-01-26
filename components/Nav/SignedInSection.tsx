"use client"

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function SignedInSection({ imageUrl }:{ imageUrl:string }) {
  return (
    <section className="flex items-center gap-3">
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
