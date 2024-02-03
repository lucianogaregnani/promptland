import ListOfPromptsHome from "@/components/Home/ListOfPromptsHome";
import Notice from "@/components/Home/Notice";
import Search from "@/components/Home/Search";

export default function Home({
  searchParams,
}: {
  searchParams: { query: string };
}) {

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
      <Search />
      <div className="relative flex justify-center">
        <ListOfPromptsHome query={searchParams.query}/>
      </div>
    </section>
  );
}
