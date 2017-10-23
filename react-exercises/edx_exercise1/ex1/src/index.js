import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    title="Welcome to React Transportation"
    subtitle="The best place to buy vehicles online"
   />,
  document.getElementById("app")
);
registerServiceWorker();
