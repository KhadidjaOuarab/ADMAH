import React from "react";
import { useState, useEffect } from "react";
import { Password } from "primereact/password";

function InputPrime() {
  const [countries, setCountries] = useState([]);
  const [value13, setValue13] = useState("");

  return (
    <div>
      <div className="field col-12 md:col-4">
        <span className="p-float-label">
          <Password
            inputId="password"
            value={value13}
            onChange={(e) => setValue13(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </span>
      </div>
    </div>
  );
}

export default InputPrime;
