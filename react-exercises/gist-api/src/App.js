import React, { Component } from 'react';
import './App.css';
import FetchDemo from './components/FetchDemo';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
          <FetchDemo subreddit="reactjs"/>
      </div>
    );
  }
}

export default App;
