import { Link } from "react-router";

const InfoItem = ({ label, value }) => {
  return (
    <li className="text-sm leading-4 font-[300] dark:text-white">
      <strong className="font-[500]">{label}: </strong>
      {value}
    </li>
  );
};

const FlagCard = ({ country }) => {
  return (
    <Link to={`/country/${country.name.common}`}>
      <article className="shadow-card dark:bg-dark-elements hover:shadow-hover overflow-hidden rounded-[5px] bg-white">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="aspect-[1.65/1] w-full object-cover"
        />
        <div className="p-6 pb-[46px]">
          <h2 className="mb-4 text-lg leading-[26px] font-[700] dark:text-white">
            {country.name.common}
          </h2>
          <ul className="flex flex-col gap-2">
            <InfoItem
              label="Population"
              value={country.population.toLocaleString()}
            />
            <InfoItem label="Region" value={country.region} />
            <InfoItem label="Capital" value={country.capital} />
          </ul>
        </div>
      </article>
    </Link>
  );
};

export default FlagCard;
