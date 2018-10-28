import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducers from 'reducers';

const store = createStore(
  // the second arg to the createStore fn is the initial state
  reducers,
  {},
  applyMiddleware(logger)
);

export default (props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}
