
import React from 'react';

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <div key={country.cca3} className="countryCard">
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="country-flag" />
          <p className="country-name">{country.name.common}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
