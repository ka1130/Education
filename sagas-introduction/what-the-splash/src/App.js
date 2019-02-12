import React, { Component } from "react";
import { Provider } from "react-redux";

import configureStore from "./store";

import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <div>
          <Header />
          <ImageGrid />
        </div>
      </Provider>
    );
  }
}

export default App;
