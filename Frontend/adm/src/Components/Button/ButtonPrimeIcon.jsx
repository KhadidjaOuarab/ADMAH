import React from "react";
import { Button } from "primereact/button";
function ButtonPrimeIcon({label}) {
  return (
    <div>
      <Button label={label} icon="pi pi-check" iconPos="left" />
    </div>
  );
}

export default ButtonPrimeIcon;
