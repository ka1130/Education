import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import async from "middlewares/async";
import thunk from "redux-thunk";
import reducers from "reducers";

export default ({ children, initialState = {} }) => {
  // we pass here this initialState as a prop in order to be able to test CommentList componennt
  // CommentList.test.js
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk, async)
  );
  return <Provider store={store}>{children}</Provider>;
};
