export default function Home() {
  return (
    <section className="max-w-xl mx-auto h-screen pt-14 flex justify-center items-center flex-col gap-3">
      <div className="text-slate-500 border-2 rounded-full py-1 px-5">
        Sign in for share your own{" "}
        <span className="text-indigo-500 font-medium">prompts!</span>
      </div>
      <h1 className="textTitle text-indigo-gradient text-center">Discover & Share AI Prompts</h1>
      <p className="text-center text-lg">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <input type="text" placeholder="Search prompt..." className="w-full bg-slate-100 p-2 px-4 rounded-full max-w-xl border-2 border-slate-200 focus:border-indigo-400 focus:outline-none focus:ring-0"/>
    </section>
  );
}
