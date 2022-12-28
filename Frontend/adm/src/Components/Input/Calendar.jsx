import React from "react";
import { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";

function InputPrime({ label }) {
  const [date3, setDate3] = useState(null);

  return (
    <div>
      <div className="field  flex flex-column">
        <label htmlFor="basic">{label}</label>
        <Calendar
          id="icon"
          value={date3}
          onChange={(e) => setDate3(e.value)}
          showIcon
          className="w-12"
        />
      </div>
    </div>
  );
}

export default InputPrime;
