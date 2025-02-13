import { useState, useEffect } from "react";

export function useFetch(name = null) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let URL;
  if (name) {
    if (name.length > 3) {
      URL = `https://restcountries.com/v3.1/name/${name}`;
    } else {
      URL = `https://restcountries.com/v3.1/alpha/${name}`;
    }
  } else {
    URL = "https://restcountries.com/v3.1/all";
  }

  useEffect(() => {
    setIsLoading(true);
    setData(null);
    setError(null);
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [URL]);

  return { data, isLoading, error };
}
