import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import HomeModule from "./pages/home/HomeModule";
import Router from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
/*
<HomeModule />
 */
