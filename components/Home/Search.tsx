"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

function Search() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathName = usePathname()

  const handleChange = useDebouncedCallback((search:string) => {
    const params = new URLSearchParams(searchParams)

    if(search) {
        params.set('query', search)
    } else {
        params.delete('query')
    }

    replace(`${pathName}?${params.toString()}`)
  }, 300)

  return (
    <input
      type="text"
      placeholder="Search prompt..."
      className="w-[90%] sm:w-full input-type-text"
      defaultValue={searchParams.get('query')?.toString() || ""}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

export default Search;
