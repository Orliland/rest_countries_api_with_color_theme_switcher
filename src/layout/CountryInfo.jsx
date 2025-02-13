const InfoItem = ({ label, value }) => {
  if (label === "Languages") {
    value = Object.values(value).join(", ");
  } else if (label === "Currencies") {
    const currencies = Object.values(value);
    value = currencies.map((currency) => currency.name).join(", ");
  }

  return (
    <li className="text-sm leading-8 font-[200] dark:text-white">
      <strong className="font-[500]">{label}: </strong>
      {value}
    </li>
  );
};

import CountryButton from "../components/CountryButton";

const CountryInfo = ({ country }) => {
  const nativeNamesValues = Object.values(country.name.nativeName);
  const lastNativeName = nativeNamesValues[nativeNamesValues.length - 1];

  return (
    <div className="mt-16 flex flex-col gap-11">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="aspect-[32/23] w-full rounded-[5px] object-cover"
      />
      <div>
        <h2 className="text-2xl font-[700]">{country.name.common}</h2>
        <ul className="mt-4 mb-8">
          <InfoItem label="Native Name" value={lastNativeName.common} />
          <InfoItem
            label="Population"
            value={country.population.toLocaleString()}
          />
          <InfoItem label="Region" value={country.region} />
          <InfoItem label="Sub Region" value={country.subregion} />
          <InfoItem label="Capital" value={country.capital} />
        </ul>
        <ul className="mb-[34px]">
          <InfoItem label="Top Level Domain" value={country.tld} />
          <InfoItem label="Currencies" value={country.currencies} />
          <InfoItem label="Languages" value={country.languages} />
        </ul>

        {country.hasOwnProperty("border") && (
          <>
            <h3 className="mb-4 text-base leading-6 font-[500]">
              Border Countries
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {country.borders.map((border) => (
                <CountryButton key={border} countryCode={border} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CountryInfo;
