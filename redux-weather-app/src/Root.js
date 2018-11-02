import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
