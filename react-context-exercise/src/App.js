import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Context = React.createContext();

class Provider extends Component {
  state = {
    name: "Snowtooth Mountain"
  }

  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const Trail = props => (
  <div>
    <Context.Consumer>
      {(context) => (
        <p>This is the context: {context.state.name}</p>
      )}
    </Context.Consumer>
  </div>
)

const Lift = props => (
  <div><Trail/></div>
)

class Resort extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Lift/>
        </div>
      </Provider>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Resort />
      </div>
    );
  }
}

export default App;
