import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (
  process.env.NODE_ENV === "development" &&
  document.querySelector("#_marketing_dev_root")
) {
  const element = document.querySelector("#_marketing_dev_root");
  mount(element);
}

export { mount };
