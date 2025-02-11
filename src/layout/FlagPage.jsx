import { useParams } from "react-router";

const FlagPage = () => {
  const { name } = useParams();
  return (
    <section>
      <h1>{name}</h1>
    </section>
  );
};

export default FlagPage;
