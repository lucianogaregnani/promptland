"use client";

import { MdEdit } from "react-icons/md";
import PromptModal from "../PromptModal";
import usePromptModal from "@/hooks/usePromptModal";

function EditButton({ promptId }: { promptId: string }) {
  const { openModal, closeModal, isOpen } = usePromptModal()

  return (
    <>
      <button
        onClick={openModal}
        className="promptBtn bg-indigo-400 text-white/90 hover:bg-indigo-500"
      >
        <MdEdit />
      </button>
      <PromptModal type="update" promptId={promptId} isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

export default EditButton;
