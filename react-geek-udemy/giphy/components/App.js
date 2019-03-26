import React from "react";
import SearchForm from "components/SearchForm";
import SearchResults from "components/SearchResults";

const App = () => {
  return (
    <div>
      <SearchForm onSearchSubmit={term => console.log(term)} />
      <SearchResults />
    </div>
  );
};

export default App;
