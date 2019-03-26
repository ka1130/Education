import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.giphysRef = null;
  }

  onSubmit(e, bar) {
    e.preventDefault();
    this.props.onSearchSubmit(bar);
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e, this.giphysRef.value)}>
        <input
          type="text"
          placeholder="Find me giphys"
          ref={el => (this.giphysRef = el)}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default SearchForm;
