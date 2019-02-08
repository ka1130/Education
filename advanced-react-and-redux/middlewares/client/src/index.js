import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import Root from "Root";
import history from "./history";

import App from "./components/App";

ReactDOM.render(
  <Root>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Root>,
  document.getElementById("root")
);
