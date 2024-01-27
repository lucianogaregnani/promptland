"use client";

import { ModalContext } from "@/context/ModalProvider";
import CreatePromptSchema, {
  CreatePromptSchemaType,
} from "@/validations/create-prompt.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";

function PromptModal({ type }: { type: string }) {
  const { data: session } = useSession();
  const { closeModal, isOpen } = useContext(ModalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePromptSchemaType>({
    resolver: zodResolver(CreatePromptSchema),
  });

  const onSubmit: SubmitHandler<CreatePromptSchemaType> = (data) => {
    fetch("/api/prompt/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        prompt: data.prompt,
        tags: data.tags,
        creator: session?.user?.id,
      })
    }).then((res) => res.ok && closeModal());
  };

  return (
    isOpen && (
      <section className="z-30 fixed top-0 h-screen w-screen flex flex-col justify-center items-center">
        <div onClick={closeModal} className="z-30 absolute h-screen w-screen bg-black/40" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 py-5 px-9 sm:px-16 bg-slate-100 transition-all rounded-2xl items-center justify-center relative z-40"
        >
          <button
            onClick={closeModal}
            className="absolute right-2 top-2 text-3xl text-slate-400 bg-slate-200 hover:bg-red-400 hover:text-red-200 rounded-full p-1 transition-all"
          >
            <IoClose />
          </button>
          <label>
            <span>Title:</span>
            <input
              type="text"
              placeholder="Create a javascript query..."
              className="w-[18rem] sm:w-[20rem] input-type-text"
              {...register("title")}
            />
            {errors.title && (
              <span className="error-message">{errors.title.message}</span>
            )}
          </label>
          <label>
            <span>Prompt:</span>
            <textarea
              placeholder="Write your prompt here..."
              className="input-type-text w-[18rem] sm:w-[20rem] h-[10rem]"
              {...register("prompt")}
            />
            {errors.prompt && (
              <span className="error-message">{errors.prompt.message}</span>
            )}
          </label>
          <label>
            <span>Tags:</span>
            <input
              type="text"
              placeholder="#tag"
              className="input-type-text w-[18rem] sm:w-[20rem]"
              {...register("tags")}
            />
            {errors.tags && (
              <span className="error-message">{errors.tags.message}</span>
            )}
          </label>
          <button className="normalBtn w-full">Submit</button>
        </form>
      </section>
    )
  );
}

export default PromptModal;
