import { useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "dark" ? "light" : "dark";
    });
    document.documentElement.classList.toggle("dark");
  };
  return { theme, toggleTheme };
}
