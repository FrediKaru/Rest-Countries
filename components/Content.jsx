import React, { useState } from "react";
import data from "../data/data.json";
import CountryDetails from "./CountryDetails";

export default function Content() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [region, setRegion] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryisOpen, setCountryIsOpen] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value, region);
  };
  const handleRegionChange = (event) => {
    const { value } = event.target;
    setRegion(value);
    filterData(searchTerm, value);
  };
  const handleCardClick = (country) => {
    setSelectedCountry(country);
    setCountryIsOpen(true);
  };
  const filterData = (searchTerm, selectedRegion) => {
    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedRegion === "All" || item.region === selectedRegion)
    );
    setFilteredData(filteredData);
  };

  //   function handleFilterChange(event) {
  //     const selectedValue = event.target.value;
  //     setFilter(selectedValue);
  //   }

  return (
    <div className="Content">
      {!countryisOpen ? (
        <div>
          <div className="controls flex space-between">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
            ></input>
            <select
              name="continents"
              id="continents"
              onChange={handleRegionChange}
            >
              <option value="" disabled defaultValue>
                Filter by region
              </option>
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
          <div className="grid">
            {filteredData.map((country) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      ) : (
        <CountryDetails
          country={selectedCountry}
          setCountryIsOpen={setCountryIsOpen}
          data={data}
        />
      )}
    </div>
  );
}
