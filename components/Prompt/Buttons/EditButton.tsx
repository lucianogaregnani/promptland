"use client";

import { MdEdit } from "react-icons/md";
import PromptModal from "../PromptModal";
import usePromptModal from "@/hooks/usePromptModal";
import { useSession } from "next-auth/react";

function EditButton({
  promptId,
  userId,
}: {
  promptId: string;
  userId: string;
}) {
  const { data: session } = useSession();
  const { openModal, closeModal, isOpen } = usePromptModal();

  return (
    session?.user.id === userId && (
      <>
        <button
          onClick={openModal}
          className="promptBtn bg-indigo-400 text-white/90 hover:bg-indigo-500"
        >
          <MdEdit />
        </button>
        <PromptModal
          type="update"
          promptId={promptId}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </>
    )
  );
}

export default EditButton;
