import React from "react";
import SearchForm from "components/SearchForm";
import SearchResults from "components/SearchResults";
import InfiniteScroll from "components/InfiniteScroll";

const SearchPage = () => {
  return (
    <div>
      <SearchForm />
      <InfiniteScroll
        isLoading={false}
        onTrigger={() => console.log("trigger")}
      >
        <SearchResults />
      </InfiniteScroll>
    </div>
  );
};

export default SearchPage;
