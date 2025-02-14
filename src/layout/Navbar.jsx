import ThemeSwitcher from "../components/ThemeSwitcher";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="shadow-light dark:bg-dark-elements text-light-text bg-white dark:text-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-[30px] md:px-20 md:py-6">
        <h1 className="text-sm leading-[20px] font-[700] md:text-2xl md:leading-[33px]">
          <Link to="/">Where in the world?</Link>
        </h1>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
