import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('Lifestyle');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="text-center border-b border-dashed border-neutral-200">
      <div className="max-w-2xl mx-auto py-12 px-6">
        <h2 className="text-2xl lg:text-3xl font-medium mb-6">Search: {searchTerm}</h2>
        <div className="relative max-w-[150px] mx-auto mb-6">
          <div className="h-1 border-b-2 border-dashed border-neutral-200 w-full"></div>
          <div className="absolute end-1/2 translate-x-2.5 -top-2.5 size-6 rounded-full bg-neutral-100 border-2 border-dashed border-neutral-200"></div>
        </div>
        <div className="max-w-full w-full flex relative overflow-hidden">
          <label htmlFor="search-result" className="hidden">
            Search
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full h-12 leading-5 relative py-3 px-5 text-neutral-800 bg-white border border-neutral-200 overflow-x-auto focus:outline-none focus:border-neutral-400 focus:ring-0 peer"
            id="search-result"
          />
          {/* icon */}
          <button className="size-12 flex justify-center items-center absolute end-0 top-0 border border-neutral-200 bg-neutral-100 peer-focus:border-neutral-400">
            <SearchIcon size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
