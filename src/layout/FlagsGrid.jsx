import { useFetch } from "../utils/useFetch";

import FlagCard from "../components/FlagCard";

const FlagsGrid = ({ search, filter }) => {
  const { data, isLoading, error } = useFetch();

  return (
    <section>
      {isLoading && (
        <p className="text-dark-text text-center text-2xl dark:text-white">
          Loading countries flags...
        </p>
      )}
      {error && (
        <p className="text-dark-text text-center text-2xl dark:text-white">
          Error: something went wrong, please try again later.
        </p>
      )}
      {data && (
        <div className="grid grid-cols-1 gap-[40px] md:grid-cols-3 lg:grid-cols-4 lg:gap-[75px]">
          {data.map((country) => (
            <FlagCard key={country.name.common} country={country} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FlagsGrid;
