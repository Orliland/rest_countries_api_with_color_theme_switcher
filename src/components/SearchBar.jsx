import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setSearch, search }) => {
  return (
    <form className="relative w-full md:max-w-[480px]">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a country..."
        className="shadow-input outline-light-input text-light-input placeholder:text-light-input dark:bg-dark-elements w-full rounded-[5px] border-none bg-white px-8 py-3.5 pl-[74px] text-xs leading-5 focus:outline-[1px] md:py-[18px] md:text-sm md:leading-5 dark:text-white dark:outline-white dark:placeholder:text-white"
      />
      <div className="absolute top-0 left-8 flex h-full items-center justify-center">
        <FaSearch className="text-light-input h-4 w-4 md:h-[18px] md:w-[18px] dark:text-white" />
      </div>
    </form>
  );
};

export default SearchBar;
