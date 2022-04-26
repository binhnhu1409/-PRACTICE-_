import React from 'react';

import useCountry from '../../hooks/countryHook';

const CountryHook = () => {
  const { data, error } = useCountry('Suomi');
  return (
    <>
      {error && error.message}
      {data && <div>The current population of {data.name.common} is {data.population} </div>}
    </>
  );
};

export default CountryHook;