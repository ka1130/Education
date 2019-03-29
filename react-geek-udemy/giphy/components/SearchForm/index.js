import React from "react";
import { connect } from "react-redux";
import { searchPerformed } from "actions/search";
import styles from "./SearchForm.css";

const SearchForm = ({ onSearchSubmit }) => {
  let searchField = null;

  const searchSubmitted = e => {
    e.preventDefault();
    onSearchSubmit(searchField.value);
  };

  return (
    <form onSubmit={searchSubmitted} className={styles.container}>
      <input
        type="text"
        placeholder="Find me giphys"
        ref={el => (searchField = el)}
        className={styles.searchField}
      />
      <button type="submit" className={styles.button}>
        Submit
      </button>
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
