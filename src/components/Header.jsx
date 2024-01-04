import { useTheme } from "../useTheme";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex justify-between text-white">
      <div className="text-lg font-bold text-slate-900 dark:text-white">
        devfinder
      </div>
      {theme === "dark" ? (
        <button
          className="flex content-center gap-3 transition duration-300 hover:text-yellow-500"
          onClick={toggleTheme}
        >
          <span className="self-center text-sm uppercase tracking-widest ">
            Light
          </span>
          <SunIcon className="size-6 " />
        </button>
      ) : (
        <button
          className="flex content-center gap-3 text-slate-900 transition duration-300 hover:text-blue-600"
          onClick={toggleTheme}
        >
          <span className="self-center text-sm uppercase tracking-widest ">
            Dark
          </span>
          <MoonIcon className="size-6 text-yellow-500" />
        </button>
      )}
    </div>
  );
}
