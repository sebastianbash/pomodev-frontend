import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import SettingsContextProvider from "./context/SettingsContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SettingsContextProvider>
        <App />
      </SettingsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
