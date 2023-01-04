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
import { useSelector } from "react-redux";
function CreateStep1() {
  const navigate = useNavigate();
  const loginFunction = () => {
    navigate("/CreateStep1");
  };
  let products = null;
  const productsObject = useSelector((state) => state.createAdmReducer.state);
  if (productsObject) {
    products = Object.values(productsObject);
  }

  console.log("useSelectoruseSelectoruseSelectoruseSelector");
  console.log(products);
  console.log("useSelectoruseSelectoruseSelectoruseSelector");
  return (
    <div>
      <MenuBar />
      <BreadCrumbDemo />
      <div className="flex flex-column m-4  align-items-center justify-content-between gap-2">
        <h1>ADM Information</h1>
        <label>Summary</label>
      </div>
      <MenuSteps />

      <DataTable
        header1={"Adm No"}
        header2={"Agent Code"}
        header3={"Document No"}
        header4={"Adm Type"}
        header5={"Anomaly"}
        header6={"Currency Code"}
        header7={"Total Amount"}
        header8={"Username"}
        field={"admNo"}
        field1={"agentCode"}
        field2={"documentNumber"}
        field3={"admType"}
        field4={"anomaly"}
        field5={"currencyCode"}
        field6={"totalAmount"}
        field7={"Username"}
        products={products}
      />
      <DataTable
        header1={"Flight Date"}
        header2={"Flight Number"}
        header3={"From"}
        header4={"To"}
        field={"flightDate"}
        field1={"flightNumber"}
        field2={"froms"}
        field3={"tos"}
      />
      <DataTable
        header1={"Exchange Date"}
        header2={"Document Number"}
        header3={"Coupon No"}
        header4={"Agent Code"}
        field={"exchangeDate"}
        field1={"exchangeNumber"}
        field2={"couponNumberExchange"}
        field3={"agentCodeExchange"}
      />
      <DataTable
        header1={"Refund Date"}
        header2={"Document Number"}
        header3={"Coupon No"}
        header4={"Agent Code"}
        field={"refundDate"}
        field1={"refundNumber"}
        field2={"couponNumberRefund"}
        field3={"agentCodeRefund"}
      />

      <div className="flex flex-row mt-5 justify-content-center align-items-center gap-3">
        <PrimeButton
          label="Write Back to ADM List"
          icon="pi pi-times"
          classname="p-button-secondary w-20rem"
          searchFunction={loginFunction}
        />
        <PrimeButton
          label="Save Changes"
          icon="pi pi-check"
          searchFunction={loginFunction}
          classname="p-button-success w-20rem"
        />
      </div>
    </div>
  );
}

export default CreateStep1;
