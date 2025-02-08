import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { useState } from "react";

// TODO: add desktop styles, dark styles and local storage for theme

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button className="flex items-center gap-2" onClick={toggleTheme}>
      {isDarkMode ? <IoMoon /> : <IoMoonOutline />}
      <span className="text-xs font-[500]">Dark Mode</span>
    </button>
  );
};

export default ThemeSwitcher;
