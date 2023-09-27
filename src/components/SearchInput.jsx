import React from "react";

function SearchInput() {
  return (
    <div>
      <div className="max-w-md mx-auto">
        <div className="relative flex items-center w-full h-10 rounded-full focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="h-full w-full outline-none text-sm text-gray-700 pr-2 rounded-3xl"
            type="text"
            id="search"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
