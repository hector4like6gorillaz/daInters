import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import HomeModule from "./pages/home/HomeModule";
import Router from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
/*
<HomeModule />
 */
