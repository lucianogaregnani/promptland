"use client"

import { useState } from "react";
import LikedPromptsButton from "./LikedPromptsButton";
import PromptsButton from "./PromptsButton";
import ProfileButton from "./ProfileButton";

function Buttons() {
  const [selectedButton, setSelectedButton] = useState<"prompts" | "likedPrompts">("prompts")

  const handleClick = (typeButton:"prompts" | "likedPrompts") => {
    setSelectedButton(typeButton)
  }

  return (
    <div className="text-lg font-medium mt-10 flex justify-around">
      <ProfileButton isSelected={selectedButton === "prompts"} onClick={handleClick} type="prompts">
        Prompts
      </ProfileButton>
      <ProfileButton isSelected={selectedButton === "likedPrompts"} onClick={handleClick} type="likedPrompts">
        Liked prompts
      </ProfileButton>
    </div>
  );
}

export default Buttons;
