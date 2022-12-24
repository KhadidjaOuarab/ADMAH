import React from "react";
import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";

function InputPrime({label}) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const onCountryChange = (e) => {
    setSelectedCountry(e.value);
  };
  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <img
            alt={option.name}
            src="images/flag/flag_placeholder.png"
            onError={(e) =>
              (e.target.src =
                "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            className={`flag flag-${option.code.toLowerCase()}`}
          />
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="country-item">
        <img
          alt={option.name}
          src="images/flag/flag_placeholder.png"
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          className={`flag flag-${option.code.toLowerCase()}`}
        />
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <div className="field flex flex-column">
      <label htmlFor="auto">{label}</label>  <Dropdown
        value={selectedCountry}
        options={countries}
        onChange={onCountryChange}
        optionLabel="name"
        filter
        showClear
        filterBy="name"
        placeholder="Select a Country"
        valueTemplate={selectedCountryTemplate}
        itemTemplate={countryOptionTemplate}
        
      />
    </div>
  );
}

export default InputPrime;
