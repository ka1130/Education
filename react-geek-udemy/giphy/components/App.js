import React from "react";
import SearchForm from "components/SearchForm";

class App extends React.Component {
  onSearchSubmit = phrase => {
    console.log(phrase);
  };

  render() {
    return (
      <div>
        <SearchForm onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
