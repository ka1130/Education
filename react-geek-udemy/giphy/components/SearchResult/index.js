import React from "react";

const SearchResult = ({ result, onClick }) => {
  const { thumbnail } = result;
  return (
    <div>
      <img src={thumbnail} onClick={onClick} />
    </div>
  );
};

export default SearchResult;
