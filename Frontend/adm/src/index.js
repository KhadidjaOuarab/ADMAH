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
import PageTest from "./Pages/TestPages.jsx";

library.add(fas, far, fab);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PageTest />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
