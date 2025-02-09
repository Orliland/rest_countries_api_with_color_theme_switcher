import ThemeSwitcher from "../components/ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="shadow-light">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between bg-white px-4 py-[30px] md:px-20 md:py-6">
        <h1 className="text-light-text md:leading-auto text-sm leading-[20px] font-[700] md:text-2xl">
          Where in the world?
        </h1>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
