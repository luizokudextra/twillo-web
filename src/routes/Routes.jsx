import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NotFound from "../pages/NotFound/NotFound";
import VideoChat from "../pages/VideoChat/VideoChat";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={VideoChat} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
