import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

export default function Searchbar({ setUser }) {
  const inputRef = useRef();
  return (
    <form action="">
      <div
        id="search-bar"
        className="flex h-[60px] items-center justify-between rounded-lg bg-slate-200 p-2 lg:p-5 dark:bg-darkBlue "
      >
        <div
          id="search_icon-input-container"
          className="flex flex-1 gap-1 lg:gap-3"
        >
          <label htmlFor="textInput" className="cursor-pointer py-3">
            <MagnifyingGlassIcon className="size-6 text-blue-700 transition duration-300 hover:text-yellow-500" />
          </label>

          <input
            ref={inputRef}
            placeholder="Search GitHub username..."
            id="textInput"
            className="flex-1 bg-inherit p-3 text-xs text-black lg:text-sm dark:text-white "
          />
        </div>

        <button
          className="ml-3 rounded-lg bg-blue-500 px-3 py-3 text-xs font-bold tracking-wide text-white transition duration-1000 hover:bg-gradient-to-b hover:from-blue-600 hover:to-yellow-500 lg:px-5 lg:text-sm"
          onClick={(e) => {
            e.preventDefault();
            setUser(inputRef.current.value);
            // inputRef.current.value = "";
          }}
        >
          Search
        </button>
      </div>
    </form>
  );
}
