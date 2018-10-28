import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
  return (
    // the second arg to the createStore fn is the initial state
    <Provider store={createStore(reducers, initialState, applyMiddleware(logger))}>
      {children}
    </Provider>
  );
}
