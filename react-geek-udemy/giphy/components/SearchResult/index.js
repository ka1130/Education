import React from "react";

const SearchResult = ({ result }) => {
  const { thumbnail } = result;
  return (
    <div>
      <img src={thumbnail} />
    </div>
  );
};

export default SearchResult;
