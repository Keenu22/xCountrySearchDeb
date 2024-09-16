// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ query, onSearch }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search for a country..."
      className="search-bar"
    />
  );
};

export default SearchBar;
