import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import rootReducer from "reducers";

import App from "components/App";

// const store = createStore(rootReducer);

const store = createStore(() => ({}));
// reducer -> now we return just empty object which will be our store's state

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
