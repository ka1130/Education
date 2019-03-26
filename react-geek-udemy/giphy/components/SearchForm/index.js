import React from "react";

const SearchForm = ({ onSearchSubmit }) => {
  let searchField = null;

  const searchSubmitted = e => {
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

export default SearchForm;
