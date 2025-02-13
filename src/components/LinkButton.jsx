import { Link } from "react-router";

const LinkButton = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="dark:bg-dark-elements md:bg-light-background shadow-back dark:hover:bg-dark-elements/50 flex w-fit items-center gap-2 rounded-[2px] bg-white px-6 py-1.5 font-[200] hover:cursor-pointer hover:bg-white/5 hover:font-[400] md:my-20 md:px-8 md:py-2.5 dark:text-white"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
