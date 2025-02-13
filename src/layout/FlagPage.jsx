import { useFetch } from "../utils/useFetch";

import { useParams } from "react-router";
import { BsArrowLeft } from "react-icons/bs";
import CountryInfo from "./CountryInfo";
import LinkButton from "../components/LinkButton";

const FlagPage = () => {
  const { name } = useParams();

  const { data, isLoading, error } = useFetch(name);

  return (
    <section className="pt-10 md:pt-20">
      <LinkButton to="/">
        <BsArrowLeft className="h-[18px] w-[18px]" />
        <span className="text-sm leading-5 md:text-[16px]">Back</span>
      </LinkButton>
      {isLoading && (
        <p className="text-dark-text text-center text-2xl dark:text-white">
          Loading country information...
        </p>
      )}
      {error && (
        <p className="text-dark-text text-center text-2xl dark:text-white">
          Error: something went wrong, please try again later.
        </p>
      )}
      {data && <CountryInfo country={data[0]} />}
    </section>
  );
};

export default FlagPage;
