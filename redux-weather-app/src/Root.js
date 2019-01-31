import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'redux/reducers';
import { fetchWeather } from 'redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(fetchWeather);

export default ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
