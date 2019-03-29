import React from "react";
import { connect } from "react-redux";
import SearchResult from "components/SearchResult";
import styles from "./SearchResults.css";

const SearchResults = ({ results }) => {
  return (
    <div className={styles.container}>
      {results.map((result, i) => (
        <SearchResult result={result} key={i} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({ results: state.search.results });

export default connect(mapStateToProps)(SearchResults);
