import React from "react";
import { connect } from "react-redux";
import SearchResult from "components/SearchResult";

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map(result => (
        <SearchResult result={result} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(null)(SearchResults);
