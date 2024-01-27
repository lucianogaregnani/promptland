import Notice from "@/components/Notice";
import ListOfPrompts from "@/components/Prompt/ListOfPrompts";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="max-w-xl mx-auto h-screen pt-14 flex justify-center items-center flex-col gap-3">
      <Notice />
      <h1 className="textTitle text-indigo-gradient text-center">
        Discover & Share AI Prompts
      </h1>
      <p className="text-center text-md sm:text-lg text-slate-600">
        Promptland is an open-source AI prompting tool for the modern world,
        enabling users to discover, create, and share creative prompts.
      </p>
      <input
        type="text"
        placeholder="Search prompt..."
        className="w-[90%] sm:w-full input-type-text"
      />
      <Suspense fallback={<p>Loading...</p>}>
        <ListOfPrompts />
      </Suspense>
    </section>
  );
}
