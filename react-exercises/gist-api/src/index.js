import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './index.css';

import App from './App';
import SingleGist from './components/SingleGist';
import NotFound from './components/NotFound'

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        {/* when I am on the homepage */}
        <Match exactly pattern="/" component={App}/>
        <Match exactly pattern="/overview/:gistId" component={SingleGist} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept()
}
