import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Root from 'Root';
import Header from 'components/App/Header';
import App from 'components/App';
import WeatherCharts from 'components/App/WeatherCharts';

ReactDOM.render(
  <Root>
    <HashRouter>
      <>
        <Header city="Warsaw"/>
        <Switch>
          <Route path="/charts" component={WeatherCharts} />
          <Route path="/" component={App} />
        </Switch>
      </>
    </HashRouter>
  </Root>,
  document.getElementById('root')
);