import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './index.css';

import App from './App';
import Description from './components/Description';
import notFound from './components/notFound'

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        {/* when I am on the homepage */}
        <Match exactly pattern="/" component={App}/>
        <Match exactly pattern="/overview/:gistId" component={Description} />
        <Miss component={notFound} />
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept()
}
