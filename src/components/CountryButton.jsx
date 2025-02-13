import LinkButton from "./LinkButton";
import { useFetch } from "../utils/useFetch";

const CountryButton = ({ countryCode }) => {
  const { data, isLoading, error } = useFetch(countryCode);

  return (
    <>
      {data && (
        <LinkButton
          to={`/country/${data[0].name.common}`}
          customTextPadding="text-[12px] md:text-[14px] py-1.5 md:py-1 px-2 min-w-[96px]"
        >
          {data[0].name.common}
        </LinkButton>
      )}
    </>
  );
};

export default CountryButton;
