import React from "react";
import { connect } from "react-redux";
import SearchResult from "components/SearchResult";
import { showGiphy } from "actions/giphy-display";
import styles from "./SearchResults.css";

const SearchResults = ({ results, showGiphy }) => {
  return (
    <div className={styles.container}>
      {results.map((result, i) => (
        <SearchResult
          result={result}
          key={i}
          onClick={() => showGiphy(result)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({ results: state.search.results });

export default connect(
  mapStateToProps,
  { showGiphy }
)(SearchResults);
