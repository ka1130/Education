import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import configureStore, { history } from "./configureStore";

import App from "components/App";
import SearchPage from "components/Pages/SearchPage";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" component={SearchPage} />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
