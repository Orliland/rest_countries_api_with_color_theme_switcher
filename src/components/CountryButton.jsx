import LinkButton from "./LinkButton";
import { useFetch } from "../utils/useFetch";

const CountryButton = ({ countryCode }) => {
  const { data, isLoading, error } = useFetch(countryCode);

  return (
    <>
      {data && (
        <LinkButton to={`/country/${data[0].name.common}`}>
          <span className="mx-1.5 text-[12px]">{data[0].name.common}</span>
        </LinkButton>
      )}
    </>
  );
};

export default CountryButton;
