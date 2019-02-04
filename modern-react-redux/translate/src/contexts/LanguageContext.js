import React, { Component } from 'react';

const Context = React.createContext('english');
// the above creates a defaultValue, it can be of any type

export class LanguageStore extends Component {
  state = { language: 'english' }

  // this will be a callback fn so we define it as an arrow fn
  onLanguageChange = language => this.setState({ language });

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange }}>
      {/* create a new object, take all the key/values from the current state object
      and add them to this newly created object */}
        {this.props.children}
      </Context.Provider>
    );
  };
}

export default Context;
// for a default export we can rename it when we import it
// and the named exports we import with a pair of {}