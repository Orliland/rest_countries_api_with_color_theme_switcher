import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import { useState } from "react";

const FilterOption = ({ name, onClick }) => {
  return (
    <li className="leading-0">
      <button
        onClick={onClick}
        className="text-xs leading-5 hover:cursor-pointer hover:text-gray-400 md:text-sm dark:text-white"
      >
        {name}
      </button>
    </li>
  );
};

const Filter = ({ setFilter, filter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setFilter(option);
    setIsOpen(false);
  };

  return (
    <div className={`shadow-input relative w-[200px]`}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`dark:bg-dark-elements flex items-center justify-between rounded-[5px] bg-white py-3.5 pr-[18px] pl-6 hover:cursor-pointer hover:text-gray-400 md:py-[18px] md:pr-[22px] md:pl-6 dark:text-white ${isOpen ? "outline-light-input outline-[1px] dark:outline-white" : ""}`}
      >
        <span className="text-xs leading-5 md:text-sm">
          {filter || "Filter by Region"}
        </span>
        {filter === false ? (
          <MdKeyboardArrowDown className="h-2.5 w-2.5 md:h-3 md:w-3" />
        ) : (
          <MdClose
            className="h-2.5 w-2.5 md:h-3 md:w-3"
            onClick={(e) => {
              e.stopPropagation();
              setFilter(false);
            }}
          />
        )}
      </div>
      <ul
        className={`dark:bg-dark-elements shadow-input absolute top-[calc(100%+4px)] left-0 w-full flex-col gap-2 rounded-[5px] bg-white px-6 py-4 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <FilterOption
          name="Africa"
          onClick={() => handleOptionClick("Africa")}
        />
        <FilterOption
          name="America"
          onClick={() => handleOptionClick("America")}
        />
        <FilterOption
          name="Antarctic"
          onClick={() => handleOptionClick("Antarctic")}
        />
        <FilterOption name="Asia" onClick={() => handleOptionClick("Asia")} />
        <FilterOption
          name="Europe"
          onClick={() => handleOptionClick("Europe")}
        />
        <FilterOption
          name="Oceania"
          onClick={() => handleOptionClick("Oceania")}
        />
      </ul>
    </div>
  );
};

export default Filter;
