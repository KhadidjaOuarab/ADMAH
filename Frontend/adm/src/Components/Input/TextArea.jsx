import React from "react";
import { useState, useEffect } from "react";
import { InputTextarea } from "primereact/inputtextarea";

function InputPrime() {
  const [countries, setCountries] = useState([]);
  const [value14, setValue14] = useState("");

  return (
    <div>
      <div className="field col-12 md:col-4">
        <span className="p-float-label">
          <InputTextarea
            id="textarea"
            value={value14}
            onChange={(e) => setValue14(e.target.value)}
            rows={3}
          />
          <label htmlFor="textarea">Textarea</label>
        </span>
      </div>
    </div>
  );
}

export default InputPrime;
