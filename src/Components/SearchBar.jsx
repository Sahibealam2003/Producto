import React from "react";

const SearchBar = ({ query, setQuery }) => {
  return (
    //  SearchBar
    <div className="hidden sm:flex items-center bg-white rounded shadow-md w-full max-w-2xl mx-auto px-3 py-1">
      
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="w-full h-10 text-sm text-black/80 px-4 outline-none placeholder:text-sm placeholder:tracking-wide rounded"
        placeholder="Search your preferred items here"
      />
    </div>
  );
};

export default SearchBar;
