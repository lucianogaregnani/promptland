import PromptsSkeleton from "@/Skeletons/PromptsSkeleton";
import Notice from "@/components/Notice";
import ListOfPrompts from "@/components/Prompt/ListOfPrompts";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="min-h-screen pt-14 flex justify-center items-center flex-col gap-3">
      <Notice />
      <h1 className="max-w-xl textTitle text-indigo-gradient text-center">
        Discover & Share AI Prompts
      </h1>
      <p className="max-w-xl text-center text-md sm:text-lg text-slate-600">
        Promptland is an open-source AI prompting tool for the modern world,
        enabling users to discover, create, and share creative prompts.
      </p>
      <input
        type="text"
        placeholder="Search prompt..."
        className="w-[90%] sm:w-full input-type-text"
      />
      <div className="relative w-full">
        <Suspense fallback={<PromptsSkeleton cards={3} />}>
          <ListOfPrompts />
        </Suspense>
      </div>
    </section>
  );
}
