import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

import App from 'components/App';

ReactDOM.render(
  // the second arg to the createStore fn is the initial state
  <Provider store={createStore(reducers, {})}> 
    <App />
  </Provider>,
  document.getElementById('root')
);
