import React from "react";
import SearchForm from "components/SearchForm";
import SearchResults from "components/SearchResults";

const results = [
  {
    full: "https://media3.giphy.com/media/g5KhmX06Q0XBu/giphy.gif",
    thumbnail: "https://media3.giphy.com/media/g5KhmX06Q0XBu/100_s.gif"
  },
  {
    full: "https://media1.giphy.com/media/A8NNZlVuA1LoY/giphy.gif",
    thumbnail: "https://media1.giphy.com/media/A8NNZlVuA1LoY/100_s.gif"
  }
];

const App = () => {
  return (
    <div>
      <SearchForm onSearchSubmit={term => console.log(term)} />
      <SearchResults />
    </div>
  );
};

export default App;
