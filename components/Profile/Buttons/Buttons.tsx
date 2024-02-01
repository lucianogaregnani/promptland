/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";
import ProfileButton from "./ProfileButton";
import { useSession } from "next-auth/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function Buttons() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  useEffect(() => {
    changeTypeButton("prompts")
  }, []);

  const changeTypeButton = (typeButton: "prompts" | "likedPrompts") => {
    params.set("section", typeButton);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="text-lg font-medium mt-10 flex justify-around mb-3">
      <ProfileButton
        onClick={changeTypeButton}
        type="prompts"
      >
        Prompts
      </ProfileButton>
      {`/profile/${session?.user.id}` === pathname && (
        <ProfileButton
          onClick={changeTypeButton}
          type="likedPrompts"
        >
          Liked prompts
        </ProfileButton>
      )}
    </div>
  );
}

export default Buttons;
