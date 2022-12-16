import React from "react";
import buttonClass from "./Button.css";

function Button({button,ButtonLabel,onClickFunction}) {
  return (
    <>
      <button className={button} onClick={onClickFunction}>{ButtonLabel}</button>
    </>
  );
}

export default Button;
