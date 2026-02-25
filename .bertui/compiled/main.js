import React from "react";
import ReactDOM from "react-dom/client";
import { Router, routes } from "./router.js";
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(React.StrictMode, null, React.createElement(Router, {
  routes
})));
