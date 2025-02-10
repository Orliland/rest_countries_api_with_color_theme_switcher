import { useState } from "react";

import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

const FlagsHome = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(null);

  return (
    <div>
      <section className="flex flex-col gap-y-10 pt-6 pb-8 md:flex-row md:justify-between">
        <SearchBar setSearch={setSearch} search={search} />
        <Filter setFilter={setFilter} filter={filter} />
      </section>
    </div>
  );
};

export default FlagsHome;
