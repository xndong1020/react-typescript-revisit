import React from "react";
import ReactDOM from "react-dom";
import PackageSearch from "./components/PackageSearch";
import { Provider } from "react-redux";

ReactDOM.render(
  <>
    <PackageSearch />
  </>,
  document.querySelector("#root")
);
