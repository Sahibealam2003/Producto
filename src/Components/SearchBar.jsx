import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="bg-white px-4 py-1 ml-8 rounded shadow-md hidden sm:flex flex-grow w-[100%]">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="w-[40vw] h-10 text-[14px] text-black/80 px-4 outline-none placeholder:text-[13.5px] placeholder:tracking-wide"
        placeholder="Search your preferred items here"
      />
    </div>
  );
};

export default SearchBar;
