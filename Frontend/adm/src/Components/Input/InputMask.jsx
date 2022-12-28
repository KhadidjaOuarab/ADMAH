import React from "react";
import { useState, useEffect } from "react";
import { InputMask } from "primereact/inputmask";
function InputPrime({ label,mask }) {
  const [val1, setVal1] = useState();

  return (
    <div>
      <div className="field  flex flex-column ">
        <label htmlFor="basic">{label}</label>
        <InputMask
          id="basic"
          mask={mask}
          value={val1}
          placeholder={mask}
          onChange={(e) => setVal1(e.value)}
          className="w-15rem h-3rem"
        ></InputMask>
      </div>
    </div>
  );
}

export default InputPrime;
