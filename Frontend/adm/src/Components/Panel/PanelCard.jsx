import React from "react";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";
import InputMask from "../Input/InputMask";
import DropDownClear from "../Input/DropDownAdvanced";
import PrimeButton from "../Button/ButtonPrimeIcon";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { SETPRODUCT } from "../../Redux/type/type";
import {setProductAction} from "../../Redux/actions/actions"
const PanelCard = (props) => { 
 
  const [selectedAdmType, setSelectedAdmType] = useState(null);
  const admTypes = [
    { name: "Issue", code: "ISSUE" },
    { name: "Refund", code: "REFUND" },
    { name: "Flown", code: "FLOWN" },
    { name: "Exchange", code: "EXCHANGE" },
  ];

  let target = "";
  const navigate = useNavigate();
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
  /**************************************************************** */
  const [products, setProducts] = useState([{}]);
  const dispatch = useDispatch();
  /**************************************************************** */

  const searchAdmFunction = () => {
    console.log("response.ok");

    axios
      .get("http://localhost:4000/Adms/AllAdms")
      .then((response) => {
        setProducts(response.data);
        console.log(products);
        dispatch( setProductAction(response.data));
        console.log(products);
      })
      .catch((error) => {
        console.log(error.value);
      });
   
  };









  const CreateAdmFunction = () => {
    target = "/CreateStep1";
    navigate(target);
  };
  ////////  Get Auto Complete Agents ////////////////

  const [agents, setAgents] = useState([]);
  const [agent, setAgent] = useState({ ["Agency Code"]: "" });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/Agents/AllAgents");
      const newData = await response.json();
      console.log(newData);
      console.log(newData[1]["Agency Code"]);
      setAgents(newData);
    };
    fetchData();
  }, []);

  const onChangeMethod = (e) => {
    setAgent(e.value);
  };

  /////////////////////////////////////////////////////
  const onChangeMethodAdmType = (e) => {
    setSelectedAdmType(e.value);
  };

  ////////  Get Auto Complete Agents ////////////////

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData1 = async () => {
      const response1 = await fetch("http://localhost:4000/Users/AllUsers");
      const newData1 = await response1.json();
      console.log(newData1);
      setUsers(newData1);
    };
    fetchData1();
  }, []);

  const onChangeMethodUsername = (e) => {
    setUser(e.value);
  };
  ////////////////////////////////////////////
  return (
    <div>
      <br />
      <Panel headerTemplate={template} toggleable className="ml-5 mr-5 ">
        <div className="flex flex-row  justify-content-space-between gap-5">
          <InputMask label="Document Number" mask="9999999999" />
          <DropDownClear
            label="Agent Code"
            placeholder="Select an Agent"
            autoCompleteValues={agents}
            selectedValue={agent}
            onChangeMethod={onChangeMethod}
            filterByProps="Agency Code"
            optionLabelProps="Agency Code"
          />
          <InputMask label="ADM Number" mask="" />
          <DropDownClear
            label="ADM Type"
            placeholder="Select ADM Type "
            autoCompleteValues={admTypes}
            selectedValue={selectedAdmType}
            onChangeMethod={onChangeMethodAdmType}
            filterByProps="name"
            optionLabelProps="name"
          />
          <DropDownClear
            label="Username"
            placeholder="Select Username"
            autoCompleteValues={users}
            selectedValue={user}
            onChangeMethod={onChangeMethodUsername}
            filterByProps="username"
            optionLabelProps="username"
          />
        </div>
        <div className="flex flex-row  justify-content-space-between gap-3">
          <PrimeButton
            label="Search"
            icon="pi pi-search"
            searchFunction={() => dispatch(searchAdmFunction())}
            classname=""
          />

          <Link to={target}>
            <PrimeButton
              label="Add ADM"
              icon="pi pi-plus"
              classname="p-button-success"
              //     searchFunction={CreateAdmFunction()}
            />
          </Link>
        </div>
      </Panel>
    </div>
  );
};

////////////// Se connecter au store pour récuperer le product for the datatable ////////
// Le state c'est l'état de notre magasin

/*const mapStateToProps = (state) => {
  return {
    products:  state.products
  };
};
*/
/*******************************************************************$ */
export default PanelCard;
