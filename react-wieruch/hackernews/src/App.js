import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = 'Welcome to the Road to learn React';
    var paragraph = 'This is the first paragraph';
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <p className="Paragraph">{paragraph}</p>
      </div>
    );
  }
}

export default App;
