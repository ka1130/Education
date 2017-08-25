import React, { Component } from 'react';
import './App.css';

import FetchDemo from './components/FetchDemo';
import DescriptionList from './components/DescriptionList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
          <DescriptionList />
      </div>
    );
  }
}

export default App;
