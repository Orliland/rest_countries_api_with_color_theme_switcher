import { MdKeyboardArrowDown } from "react-icons/md";

const Filter = () => {
  return (
    <div className="shadow-input dark:bg-dark-elements relative w-[200px] rounded-[5px] bg-white py-3.5 pr-[18px] pl-6">
      <div className="flex items-center justify-between leading-5">
        <span className="text-xs dark:text-white">Filter by Region</span>
        <MdKeyboardArrowDown className="text-dark-elements h-2.5 w-2.5 dark:text-white" />
      </div>
      <ul className="dark:bg-dark-elements shadow-input absolute top-[calc(100%+4px)] left-0 flex w-full flex-col gap-2 rounded-[5px] bg-white px-6 py-4">
        <li className="leading-0">
          <button className="text-xs dark:text-white">Africa</button>
        </li>
        <li className="leading-0">
          <button className="text-xs leading-4 dark:text-white">America</button>
        </li>
        <li className="leading-0">
          <button className="text-xs leading-4 dark:text-white">Asia</button>
        </li>
        <li className="leading-0">
          <button className="text-xs leading-4 dark:text-white">Europe</button>
        </li>
        <li className="leading-0">
          <button className="text-xs leading-4 dark:text-white">Oceania</button>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
