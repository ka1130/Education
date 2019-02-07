import React from "react";

const SearchBar = () => {
  return (
    <form className="ui form">
      <div className="ui icon input">
        <input type="text" placeholder="Search..." />
        <i className="search icon" />
      </div>
    </form>
  );
};

export default SearchBar;
