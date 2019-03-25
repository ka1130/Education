import React from "react";
import SearchForm from "components/SearchForm";

const App = () => {
  return (
    <div>
      <SearchForm onSearchSubmit={() => console.log(term)} />
    </div>
  );
};

export default App;
