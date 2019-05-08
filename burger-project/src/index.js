import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import createSagaMiddleware from "redux-saga";
import rootReducer from "redux/reducers";
import { watchAuth, watchIngredients, watchOrders } from "redux/sagas";
import App from "./App";
import "./index.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => {
  return next => {
    return action => {
      console.log("middleware dispatching", action);
      const result = next(action);
      // so that the action is passed to the reducer
      // at this moment we could for example change the action
      console.log("middleware: next state", store.getState());
      return result;
    };
  };
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger, sagaMiddleware))
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchIngredients);
sagaMiddleware.run(watchOrders);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
