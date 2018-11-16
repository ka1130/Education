import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'redux/reducers';
import { watchExample } from 'redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(thunk, logger, sagaMiddleware));

sagaMiddleware.run(watchExample);

export default ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
