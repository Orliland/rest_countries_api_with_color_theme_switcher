import { FaSearch } from "react-icons/fa";

// TODO: add desktop styles
// TODO: add dark mode styles
// TODO: add error state
// TODO: add loading state
// TODO: add state management

const SearchBar = () => {
  return (
    <form className="relative">
      <input
        type="text"
        placeholder="Search for a country..."
        className="shadow-input outline-light-input text-light-input placeholder:text-light-input dark:bg-dark-elements w-full rounded-[5px] border-none bg-white px-8 py-3.5 pl-[74px] text-xs leading-5 focus:outline-[1px] dark:text-white dark:outline-white dark:placeholder:text-white"
      />
      <div className="absolute top-0 left-8 flex h-full items-center justify-center">
        <FaSearch className="text-light-input h-4 w-4 dark:text-white" />
      </div>
    </form>
  );
};

export default SearchBar;
