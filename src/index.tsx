import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UsersApp from "./components/UsersApp/UsersApp";
import DropZone from "./components/dropZone/DropZone";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <DropZone /> */}
    {/* <ToastContainer /> */}
    <UsersApp />
  </React.StrictMode>
);
