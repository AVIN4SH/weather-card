import React from "react";

function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="flex flex-row justify-center items-center text-center w-full mx-auto my2 sm:my-4 p-2 sm:p-4">
      <input
        id="searchBox"
        type="text"
        placeholder="Enter City"
        className="input input-bordered w-full max-w-xs m-2 p-2"
        value={search}
        required
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={handleSearch}
        className=" btn md:w-[15%] border border-gray-700 hover:border-white m-2 p-2"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
