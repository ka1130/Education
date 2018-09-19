import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Context = React.createContext();

class Provider extends Component {
  state = {
    name: "Snowtooth Mountain",
    status: "OPEN"
  }

  render() {
    return (
      <Context.Provider value={{
          state: this.state,
          changeStatus: () => this.setState({
            status: "CLOSED"
          })
        }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const Trail = props => (
  <div>
    <Context.Consumer>
      {(context) => (
        <div>
          <p>This is the context: {context.state.name}</p>
          <p>The resort is: {context.state.status}</p>
          <button onClick={context.changeStatus}>Close Resort</button>
        </div>
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

// url from which we'll get data
const DataComponent = (ComposedComponent, url) =>
  class DataComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        data: [],
        loading: false,
        loaded: false,
      }
    }

    componentDidMount() {
      this.setState({ loading: true })
      fetch(url)
        .then(response => response.json())
        .then(data =>
          this.setState({
            loaded: true,
            loading: false,
            data
          })
        )
    }

    render() {
      return (
        <div>
          {
            this.state.loaded
              ? <ComposedComponent {...this.state} {...this.props} />
              : <div>Loading</div>
          }
        </div>
      )
    }
  }

// People list is just a presentation component, it gets data from DataComponent
const PeopleList = ({data}) => (
  <ol>
    {data.results.map((person, index) => {
      const { first, last } = person.name
      return (
        <li key={index}>{first} {last}</li>
      )
    })}
  </ol>
)

const RandomMeUsers = DataComponent(
  PeopleList,
  "https://randomuser.me/api?results=10"
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Resort />
        <RandomMeUsers />
      </div>
    );
  }
}

export default App;
