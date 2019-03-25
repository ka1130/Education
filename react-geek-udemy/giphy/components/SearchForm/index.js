import React from "react";

const SearchForm = ({ onSearchSubmit }) => {
  return (
    <form onSubmit={onSearchSubmit}>
      <input
        type="text"
        placeholder="Find me giphys"
        ref={el => console.log(el)}
      />
      <button>Submit</button>
    </form>
  );
};

export default SearchForm;
