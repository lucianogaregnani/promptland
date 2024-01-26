"use client";

import { ModalContext } from "@/context/ModalProvider";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";

function PromptModal({ type }: { type: string }) {
  const { closeModal, isOpen } = useContext(ModalContext);

  return (
    isOpen && (
      <section className="z-30 fixed top-0 h-screen w-screen bg-black/40 transition-all flex flex-col justify-center items-center p-6">
        <h1 className="text-white text-3xl font-semibold">{type} post</h1>
        <form className="flex flex-col gap-4 py-5 px-9 sm:px-16 bg-slate-100 rounded-2xl items-center justify-center relative">
          <button onClick={closeModal} className="absolute right-2 top-2 text-3xl text-slate-400 bg-slate-200 hover:bg-red-400 hover:text-red-200 rounded-full p-1 transition-all">
            <IoClose />
          </button>
          <label>
            <span>Title:</span>
            <input
              type="text"
              placeholder="Create a javascript query..."
              className="w-[18rem] sm:w-[20rem] input-type-text"
            />
          </label>
          <label>
            <span>Prompt:</span>
            <textarea
              placeholder="Write your prompt here..."
              className="input-type-text w-[18rem] sm:w-[20rem] h-[10rem]"
            />
          </label>
          <label>
            <span>Tags:</span>
            <input
              type="text"
              placeholder="#tag"
              className="input-type-text w-[18rem] sm:w-[20rem]"
            />
          </label>
          <button className="normalBtn w-full">Submit</button>
        </form>
      </section>
    )
  );
}

export default PromptModal;
