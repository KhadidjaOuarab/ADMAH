import React from "react";
import homeCss from "../Pages/Home.css";
import Search from "../Components/Search/Search";
import MenuBar from "../Components/Menu/MenuBar";
import PanelCard from "../Components/Panel/PanelCard";
import DataTable from "../Components/DataTable/DataTableCrudWithoutExport";
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
    target = "/CreateStep1";
    navigate(target);
  };
  return (
    <div>
      <MenuBar />
      <BreadCrumbDemo />
      <div className="flex flex-column m-4  align-items-center justify-content-between gap-2">
        <h1>ADM Information</h1>
        <label>
         Summary
        </label>
      </div>
      <MenuSteps />

      <DataTable />
      <DataTable />
      <DataTable />
      <DataTable />
      <div className="flex flex-row  justify-content-center align-items-center gap-3">
        <PrimeButton label="Save Changes" searchFunction={""} />

        <Link to={target}>
          <PrimeButton label="Write Back to ADM List" searchFunction={loginFunction(target)} />
        </Link>
      </div>
    </div>
  );
}

export default CreateStep1;
