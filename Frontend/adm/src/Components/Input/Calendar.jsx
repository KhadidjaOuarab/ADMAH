import React from "react";
import { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";

function InputPrime() {
  const [date3, setDate3] = useState(null);

  return (
    <div>
      <Calendar
        id="icon"
        value={date3}
        onChange={(e) => setDate3(e.value)}
        showIcon
      />
    </div>
  );
}

export default InputPrime;
