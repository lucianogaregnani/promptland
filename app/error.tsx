"use client";

import { useEffect } from "react";

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="h-screen flex-col flex gap-5 justify-center items-center">
      <h2 className="text-5xl text-red-500 font-bold">Something went wrong!</h2>
      <button
        onClick={
          () => reset()
        }
        className="normalBtn"
      >
        Try again
      </button>
    </div>
  );
}

export default Error;
