import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments,
}

const store = createStore(
  rootReducer,
  defaultState
);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  // accept and run a function that will rerquire and swap out the module for us
  module.hot.accept('./reducers/', () => {
    // we cannot use the ES6 import here, we need to use require, we require the top-level reducer
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;