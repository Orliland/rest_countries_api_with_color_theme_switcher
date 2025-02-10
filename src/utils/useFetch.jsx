import { useState, useEffect } from "react";

export function useFetch() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const URL = "https://restcountries.com/v3.1/all";

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
  }, []);

  return { data, isLoading, error };
}
