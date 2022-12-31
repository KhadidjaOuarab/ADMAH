import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./Pages/Login";
import { BrowserRouter } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import CreateADM from "./Pages/CreateStep1";
import CreateAdmFlown from "./Pages/CreateStep2Flown";
import CreateAdmExchange from "./Pages/CreateStep2Exchange";
import CreateAdmRefund from "./Pages/CreateStep2Refund";
import Anomaly from "./Pages/CreateStep3Anomaly";
import Summary from "./Pages/CreateStep4Summary";
import PanelCard from "./Components/Panel/PanelCard";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

/* Prime React Configuration */

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
//import "primereact/resources/themes/tailwind-light/theme.css";  //theme
//import "primereact/resources/themes/bootstrap4-light-purple/theme.css";  //theme

import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; //flex

import { Provider } from "react-redux";
import { store } from "./Redux/store/store";
library.add(fas, far, fab);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/CreateStep1" element={<CreateADM />} />
          <Route path="/CreateStep2Flown" element={<CreateAdmFlown />} />
          <Route path="/CreateStep2Exchange" element={<CreateAdmExchange />} />
          <Route path="/CreateStep2Refund" element={<CreateAdmRefund />} />
          <Route path="/Anomaly" element={<Anomaly />} />
          <Route path="/Summary" element={<Summary />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
