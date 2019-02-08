import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.onSubmit}>
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <i className="search icon" />
        </div>
      </form>
    );
  }
}

export default SearchBar;
