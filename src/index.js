import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./app/AppEntry";
import reportWebVitals from "./reportWebVitals";
import AppEntry from "./app/AppEntry";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppEntry />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
