import React from "react";
import SearchForm from "components/SearchForm";

const App = () => {
  return <SearchForm onSearchSubmit={term => console.log(term)} />;
};

export default App;
