import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const handleSearchNote = (event) => {
  setSearch;
};

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <AiOutlineSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default Search;
