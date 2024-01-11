import React from "react";

const SearchForItem = ({ search, setSearch, handleSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => setSearch(e.preventDefault)}>
      <label htmlFor="searchForm">Search</label>
      <input
        type="text"
        id="searchForm"
        placeholder="Search for item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForItem;
