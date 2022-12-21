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
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

/* Prime React Configuration 


import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/themes/tailwind-light/theme.css";  //theme
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";  //theme

import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";                                //flex

/**************************** */
library.add(fas, far, fab);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
