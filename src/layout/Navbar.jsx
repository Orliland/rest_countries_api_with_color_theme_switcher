import ThemeSwitcher from "../components/ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between items-center py-[30px] px-4 shadow-light">
      <h1 className="text-light-text text-sm font-extrabold leading-[20px]">
        Where in the world?
      </h1>
      <ThemeSwitcher />
    </nav>
  );
};

export default Navbar;
