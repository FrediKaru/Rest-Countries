import React from "react";

export default function CountryDetails({ country, setCountryIsOpen, data }) {
  const codeToName = (code) => {
    const borderCountry = data.find((country) => country.alpha3Code === code);
    return borderCountry ? borderCountry.name : "not found2";
  };

  return (
    <div>
      <button onClick={() => setCountryIsOpen(false)} className="back-btn">
        Back
      </button>
      <div className="grid-2">
        <div className="flex grow-1">
          <img className="full-width" src={country.flag} alt={country.name} />
        </div>
        <div className="flex flex-column justify-center">
          <h1>{country.name}</h1>
          <div className="grid-2">
            <div>
              <p>
                <strong>Population: </strong>
                {country.population}
              </p>
              <p>
                <strong>Region: </strong>
                {country.region}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {country.subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {country.capital}
              </p>
            </div>
            <div>
              <p>
                <strong>Top Level Domain: </strong>
                {country.topLevelDomain}
              </p>
              <p>
                <strong>Currencies: </strong>
                {country.currencies.map((item) => (
                  <span>{item.name}</span>
                ))}
              </p>
              <p>
                <strong>Languages: </strong>
                {country.languages.map((item) => (
                  <span key={item.numericCode}>{item.name}</span>
                ))}
              </p>
            </div>
          </div>

          {country.borders && (
            <div className="flex flex-row align-center">
              <p>
                <strong>Border countries:</strong>
              </p>
              {country.borders.map((border, index) => (
                <p className="borderCountry" key={index}>
                  {" "}
                  {codeToName(border)}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

{
  /* <div
                className="card flex flex-column"
                key={country.numericCode}
                onClick={() => handleCardClick(country)}
              >
                <div className="grow-1">
                  <img src={country.flag} alt={country.name} />
                </div>
                <div className="text grow-1">
                  <h2>{country.name}</h2>
                  <p>
                    <strong>Population:</strong> {country.population}
                  </p>
                  <p>
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p>
                    <strong>Capital:</strong> {country.capital}
                  </p>
                </div>
              </div> */
}
