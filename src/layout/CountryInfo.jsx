const InfoItem = ({ label, value }) => {
  if (label === "Languages") {
    value = Object.values(value).join(", ");
  } else if (label === "Currencies") {
    const currencies = Object.values(value);
    value = currencies.map((currency) => currency.name).join(", ");
  }

  return (
    <li className="text-sm leading-8 font-[200] md:text-base dark:text-white">
      <strong className="font-[500]">{label}: </strong>
      {value}
    </li>
  );
};

import CountryButton from "../components/CountryButton";

const CountryInfo = ({ country }) => {
  if (country.name.nativeName) {
    const nativeNamesValues = Object.values(country.name.nativeName);
    const lastNativeName = nativeNamesValues[nativeNamesValues.length - 1];
  }

  return (
    <div className="mt-16 flex flex-col items-start gap-11 md:mt-20 md:flex-row md:gap-20 lg:gap-36">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="aspect-[32/23] w-full rounded-[5px] object-cover md:aspect-[7/5] md:max-w-[560px]"
      />
      <div>
        <h2 className="text-2xl font-[700] md:text-[32px] dark:text-white">
          {country.name.common}
        </h2>
        <div className="mt-4 mb-[34px] flex flex-col gap-8 md:flex-row md:justify-between">
          <ul>
            {country.name.nativeName && (
              <InfoItem label="Native Name" value={lastNativeName.common} />
            )}
            {country.population && (
              <InfoItem
                label="Population"
                value={country.population.toLocaleString()}
              />
            )}
            {country.region && (
              <InfoItem label="Region" value={country.region} />
            )}
            {country.subregion && (
              <InfoItem label="Sub Region" value={country.subregion} />
            )}
            {country.capital && (
              <InfoItem label="Capital" value={country.capital} />
            )}
          </ul>
          <ul>
            {country.tld && (
              <InfoItem label="Top Level Domain" value={country.tld} />
            )}
            {country.currencies && (
              <InfoItem label="Currencies" value={country.currencies} />
            )}
            {country.languages && (
              <InfoItem label="Languages" value={country.languages} />
            )}
          </ul>
        </div>

        {country.hasOwnProperty("borders") && (
          <div className="flex flex-col gap-4 md:flex-row md:text-nowrap">
            <h3 className="text-base leading-6 font-[500] dark:text-white">
              Border Countries
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {country.borders.map((border) => (
                <CountryButton key={border} countryCode={border} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryInfo;
