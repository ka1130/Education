import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Root from 'Root';
import Header from 'components/App/Header';
import App from 'components/App';

ReactDOM.render(
  <Root>
    <HashRouter>
      <>
        <Header city="Warsaw"/>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </>
    </HashRouter>
  </Root>,
  document.getElementById('root')
);