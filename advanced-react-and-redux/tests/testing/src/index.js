import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducers from 'reducers';

import App from 'components/App';

const store = createStore(
  reducers,
  {},
  applyMiddleware(logger)
);

ReactDOM.render(
  // the second arg to the createStore fn is the initial state
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);
