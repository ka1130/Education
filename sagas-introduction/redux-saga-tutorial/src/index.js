import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "reducers";
import App from "components/App";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://rem-rest-api.herokuapp.com/api";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
