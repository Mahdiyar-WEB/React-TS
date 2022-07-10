import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UsersApp from "./components/UsersApp/UsersApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UsersApp />
  </React.StrictMode>
);
