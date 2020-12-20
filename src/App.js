import React, { Fragment } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import AppLayout from "./appLayout";
import Home from "./view/home";
import Details from "./view/recipes/details"

const App = () => {
  return (
    <BrowserRouter basename={"/"}>
        <Switch>
          <Fragment>
            <AppLayout>
              <Route exact path={`/`} component={Home} />
              <Route exact path={`/:id`} component={Details} />
              <Redirect to="/" />
            </AppLayout>
          </Fragment>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
