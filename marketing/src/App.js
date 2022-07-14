import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

const App = () => {
  return (
    <>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </>
  );
};

export default App;
