import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "reducers";
import { searchSuccess } from "actions/search";
import searchSaga from "sagas/search";

import App from "components/App";

const sagas = createSagaMiddleware();
// create generator instance

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagas))
);

sagas.run(searchSaga);

const results = [
  {
    full: "https://media3.giphy.com/media/g5KhmX06Q0XBu/giphy.gif",
    thumbnail: "https://media3.giphy.com/media/g5KhmX06Q0XBu/100_s.gif"
  },
  {
    full: "https://media1.giphy.com/media/A8NNZlVuA1LoY/giphy.gif",
    thumbnail: "https://media1.giphy.com/media/A8NNZlVuA1LoY/100_s.gif"
  }
];

window.setTimeout(() => {
  store.dispatch(searchSuccess(results));
}, 2000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
