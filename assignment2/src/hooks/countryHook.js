import { useState, useEffect } from 'react';

const useCountry = (countryName) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const json = await res.json();
        setData(json);
        setError(null);
      }
      catch (err) {
        setError('Oh snap! Error happens...');
      }
    };
    fetchCountry();
  }, [countryName]);
  return { data, error };
};

export default useCountry;
