"use client";

import ProfileAccount from "@/components/Profile/ProfileAccount";
import { useSession } from "next-auth/react";

function ProfilePage() {
  const { data: session } = useSession();

  return (
    <section className="p-4 max-w-3xl m-auto mt-20">
      <ProfileAccount
        username={session?.user.name || ""}
        email={session?.user.email || ""}
        image={session?.user.image || ""}
      />
    </section>
  );
}

export default ProfilePage;
