import React from "react";
import { connect } from "react-redux";
import SearchForm from "components/SearchForm";
import SearchResults from "components/SearchResults";
import InfiniteScroll from "components/InfiniteScroll";
import { newSearch, performSearch } from "actions/search";

const SearchPage = ({
  onSearchSubmit,
  onInfiniteScroll,
  isLoading,
  isActive
}) => {
  return (
    <div>
      <SearchForm onSearchSubmit={onSearchSubmit} />
      <InfiniteScroll
        isLoading={isLoading}
        onTrigger={() => onInfiniteScroll()}
        isActive={isActive}
      >
        <SearchResults />
      </InfiniteScroll>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.search.isLoading,
  isActive: state.search.isActive
});

const mapDispatchToProps = dispatch => ({
  onSearchSubmit: searchTerm => {
    dispatch(newSearch(searchTerm));
    dispatch(performSearch());
  },
  onInfiniteScroll: () => {
    dispatch(performSearch());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
