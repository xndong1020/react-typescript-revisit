import React from "react";
import ReactDOM from "react-dom";
import PackageSearch from "./components/PackageSearch";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <PackageSearch />
  </Provider>,
  document.querySelector("#root")
);
