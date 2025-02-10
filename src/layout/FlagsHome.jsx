import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
const FlagsHome = () => {
  return (
    <div>
      <section className="flex flex-col gap-y-10 pt-6 pb-8 md:flex-row md:justify-between">
        <SearchBar />
        <Filter />
      </section>
    </div>
  );
};

export default FlagsHome;
