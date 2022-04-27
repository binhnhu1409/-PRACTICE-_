import React from 'react';

import withCountry from '../../hocs/withCountry';

const CountryHoc = ({ data, error }) => {

  return (
    <>
      {error && error.message}
      {data && <div>The current population of {data[0].name.common} is {data[0].population} </div>}
    </>
  );
};

export default withCountry(CountryHoc, 'Sweden');