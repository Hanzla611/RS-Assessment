import React from "react";
import SearchInput from "./SearchInput";

function TopSection() {
  return (
    <div>
      <div className="top-section">
        <div className="parent flex justify-between items-center">
          <div className="left-text-block text-gray-500">
            <span className="text-xl ">Users</span>
            <p className="text-sm mt-2 ">
              Here are all the users for this project.
            </p>
          </div>
          <div className="right-block">
            <button className="border-2 border-purple-800 text-purple-800 font-bold py-1 px-1 rounded md:py-2 md:px-6 sm:px-2">
              + Add User
            </button>
          </div>
        </div>
        <div className="flex pt-8 items-center">
          <SearchInput />
          <span className="text-gray-500 text-xs font-medium ml-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-2 font-medium"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
              />
            </svg>
            Filter
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
