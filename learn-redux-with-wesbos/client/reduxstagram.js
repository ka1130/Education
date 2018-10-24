import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url } from './data/config';

Raven.config(sentry_url).install();

// console.log(window.doesNotExist.nope);

const router = (
  <Provider store={store}>
    <Router history={history}>
  {/* we now use this history that syncs browserHistory from react-router with out store instead of just browserHistory itself */}
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>

)

render(router, document.getElementById('root'));
