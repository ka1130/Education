import React from "react";
import { connect } from "react-redux";
import { searchPerformed } from "actions/search";

const SearchForm = ({ onSearchSubmit }) => {
  let searchField = null;

  const searchSubmitted = e => {
    console.log(searchField.value);
    e.preventDefault();
    onSearchSubmit(searchField.value);
  };

  return (
    <form onSubmit={searchSubmitted}>
      <input
        type="text"
        placeholder="Find me giphys"
        ref={el => (searchField = el)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchSubmit: searchTerm => dispatch(searchPerformed(searchTerm))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchForm);
