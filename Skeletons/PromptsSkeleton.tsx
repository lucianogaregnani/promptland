import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PromptsSkeleton = ({ cards }: { cards: number }) => {

  return (
    <section className="absolute top-0 flex flex-wrap justify-center gap-3 w-full">
      {Array(cards).fill(0).map((card) => (
        <article
          key={card}
          className="flex flex-col gap-2 w-[25rem] p-5 rounded-2xl border-slate-100"
        >
          <header className="flex gap-2 items-center">
            <div>
              <Skeleton circle height={50} width={50} />
            </div>
            <div>
              <Skeleton height={15} width={80} />
              <Skeleton height={15} width={150} />
            </div>
          </header>
          <Skeleton height={15} />
          <Skeleton />
        </article>
      ))}
    </section>
  );
};
export default PromptsSkeleton;
