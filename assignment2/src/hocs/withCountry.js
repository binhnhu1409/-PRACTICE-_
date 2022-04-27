import React, { useState, useEffect } from 'react';

const withCountry = (WrappedComponent, countryName) => {
  const WithCountry = (props) => {
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
    }, []);

    return (
      <WrappedComponent
        {...props}
        data={data}
        error={error} />);
  };

  return WithCountry;
};

export default withCountry;