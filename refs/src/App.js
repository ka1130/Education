import React, { Component } from "react";
import Square from "./Square";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Square />
        <Square initialColor="red" />
        <Square initialColor="green" />
      </div>
    );
  }
}

export default App;
