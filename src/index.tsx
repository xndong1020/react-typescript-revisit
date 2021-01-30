import React from "react";
import ReactDOM from "react-dom";
import PackageSearch from "./components/PackageSearch";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";

ReactDOM.render(
  <Provider store={store}>
    <PackageSearch />
  </Provider>,
  document.querySelector("#root")
);
