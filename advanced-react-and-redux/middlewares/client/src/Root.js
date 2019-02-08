import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import async from "middlewares/async";
import stateValidator from "middlewares/stateValidator";
import reducers from "reducers";

export default ({ children, initialState = {} }) => {
  // we pass here this initialState as a prop in order to be able to test CommentList componennt
  // CommentList.test.js

  //  applyMiddleware(thunk, async)
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk, stateValidator))
  );
  return <Provider store={store}>{children}</Provider>;
};
