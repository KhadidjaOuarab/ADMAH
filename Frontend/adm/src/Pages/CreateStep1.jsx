import React from "react";
import homeCss from "../Pages/Home.css";
import Search from "../Components/Search/Search";
import MenuBar from "../Components/Menu/MenuBar";
import PanelCard from "../Components/Panel/PanelCard";
import DataTable from "../Components/DataTable/DataTableCrudDemo";
import BreadCrumbDemo from "../Components/Menu/BreadCrumb";
import MenuSteps from "../Components/Menu/MenuSteps";
import InputMask from "../Components/Input/InputMask";
import DropDownClear from "../Components/Input/DropDownAdvanced";
import StepCss from "../Pages/CreateStep1";
import FlexBox from "../Components/FlexBox/FlexBox";
import CalendarInput from "../Components/Input/Calendar";
import PrimeButton from "../Components/Button/ButtonPrimeIcon";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function CreateStep1() {
  let target = "";
  const navigate = useNavigate();
  const loginFunction = ( target) => {
    target = "/CreateStep2Flown";
    navigate(target);
  };
  return (
    <div>
      <MenuBar />
      <BreadCrumbDemo />
      <div className="flex flex-column m-4  align-items-center justify-content-between gap-2">
        <h1>ADM Information</h1>
        <label>
          Agency Debit Memos (ADM) / Agency Credit Memos (ACM) are adjustements
          issued by an Airline for any incorrectly reported document
        </label>
      </div>
      <MenuSteps />

      <FlexBox
        input1Col1={<DropDownClear label="ADM Type" />}
        input2Col1={<InputMask label="Document Number" />}
        input3Col1={<CalendarInput label="Issue Date" />}
        input1Col2={<DropDownClear label="Agent Code" />}
        input2Col2={<InputMask label="Coupon Number" />}
        input3Col2={<DropDownClear label="Issue City" />}
      />

      <div className="flex flex-row  justify-content-center align-items-center gap-3">
        <PrimeButton label="Next" searchFunction={loginFunction(target)} />

        <Link to={target}>
          <PrimeButton label="Go Back"  />
        </Link>
      </div>
    </div>
  );
}

export default CreateStep1;
