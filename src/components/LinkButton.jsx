import { Link } from "react-router";
const LinkButton = ({ to, children, customTextPadding }) => {
  return (
    <Link
      to={to}
      className={`shadow-back md:bg-light-background dark:bg-dark-elements dark:hover:bg-dark-elements/50 flex w-fit items-center justify-center gap-2 rounded-[2px] bg-white font-[200] hover:cursor-pointer hover:bg-white/5 hover:font-[400] dark:text-white ${customTextPadding}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
