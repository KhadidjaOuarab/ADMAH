import React from "react";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";
import InputMask from "../Input/InputMask";
import DropDownClear from "../Input/DropDownAdvanced";
import PrimeButton from "../Button/ButtonPrimeIcon";
const PanelCard = () => {
  const template = (options) => {
    const toggleIcon = options.collapsed
      ? "pi pi-chevron-down"
      : "pi pi-chevron-up";
    const className = `${options.className} justify-content-start`;
    const titleClassName = `${options.titleClassName} pl-1`;

    return (
      <div className={className}>
        <button
          className={options.togglerClassName}
          onClick={options.onTogglerClick}
        >
          <span className={toggleIcon}></span>
          <Ripple />
        </button>
        <span className={titleClassName}>Search</span>
      </div>
    );
  };

  return (
    <div>
      <br />
      <Panel headerTemplate={template} toggleable className="ml-5 mr-5 ">
        <div className="flex flex-row  justify-content-space-between gap-4">
          <InputMask label="Document Number" />
          <DropDownClear label="Agent Code" />
          <InputMask label="ADM Number" />
          <DropDownClear label="ADM Type" />
          <DropDownClear label="Username" />
        </div>
        <div className="flex flex-row  justify-content-space-between gap-3">
          <PrimeButton label="Search" />
          <PrimeButton label="Add ADM" />
        </div>
      </Panel>
    </div>
  );
};

export default PanelCard;
