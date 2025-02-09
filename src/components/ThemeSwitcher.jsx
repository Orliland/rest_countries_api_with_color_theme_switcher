import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { useState, useEffect } from "react";

// TODO: add desktop styles, dark styles

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (theme) {
      setIsDarkMode(theme === "dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  };

  return (
    <button className="flex items-center gap-2" onClick={toggleTheme}>
      {isDarkMode ? <IoMoon /> : <IoMoonOutline />}
      <span className="text-xs font-[500]">Dark Mode</span>
    </button>
  );
};

export default ThemeSwitcher;
