import { useState } from "react";

import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import FlagsGrid from "./FlagsGrid";

const FlagsHome = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(false);

  return (
    <div>
      <section className="flex flex-col gap-y-10 pt-6 pb-8 md:flex-row md:justify-between md:py-12">
        <SearchBar setSearch={setSearch} search={search} />
        <Filter setFilter={setFilter} filter={filter} />
      </section>
      <FlagsGrid search={search} filter={filter} />
    </div>
  );
};

export default FlagsHome;
