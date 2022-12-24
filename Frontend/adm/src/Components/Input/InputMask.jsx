import React from "react";
import { useState, useEffect } from "react";
import { InputMask } from "primereact/inputmask";
function InputPrime({ label }) {
  const [val1, setVal1] = useState();

  return (
    <div>
      <div className="field  flex flex-column">
        <label htmlFor="basic">{label}</label>
        <InputMask
          id="basic"
          mask="9999999999"
          value={val1}
          placeholder="9999999999"
          onChange={(e) => setVal1(e.value)}
        ></InputMask>
      </div>
    </div>
  );
}

export default InputPrime;
