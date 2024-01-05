import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Searchbar({ setUser }) {
  const [searchText, setSearchText] = useState("");

  const onInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const onSearchClick = () => {
    setUser(searchText);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setUser(searchText);
    }
  };

  return (
    <div
      id="search-bar"
      className="group relative flex h-14 w-full items-center rounded-lg bg-slate-200 text-black dark:bg-darkBlue dark:text-white"
    >
      <label htmlFor="textInput" className="absolute left-4">
        <MagnifyingGlassIcon className="group-focus-within:text-yellow-500 size-6 text-blue-700 transition duration-300 hover:text-yellow-500" />
      </label>
      <input
        id="textInput"
        type="search"
        onInput={onInputChange}
        onKeyPress={onKeyPress}
        className="h-full w-full rounded-lg bg-transparent pl-14 pr-24"
        placeholder="Search Github username..."
      />
      <button
        className="absolute right-0 h-full rounded-lg bg-blue-500 px-3 font-bold tracking-wide hover:bg-gradient-to-b hover:from-blue-600 hover:to-yellow-500"
        onClick={onSearchClick}
      >
        Search
      </button>
    </div>
  );
}