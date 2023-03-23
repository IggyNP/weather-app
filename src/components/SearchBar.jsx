import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const SearchBar = () => {
  return (
    <div className="my-6 flex flex-col items-center justify-center">
      <div className="my-4 flex flex-row justify-center text-white">
        <h1 className="text-xl sm:text-3xl">Check out a city's weather</h1>
      </div>
      <div className="flex w-full flex-row items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="search..."
          className="text-l w-full p-2 font-light capitalize shadow-xl placeholder:lowercase focus:outline-none sm:text-xl"
        />
        <UilSearch
          size={30}
          className="cursor-pointer text-white transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={30}
          className="cursor-pointer text-white transition ease-out hover:scale-125"
        />
        <div className="flex w-1/4 flex-row items-center justify-center">
          <button
            name="metric"
            className="text-xl font-light text-white transition ease-out hover:scale-125"
          >
            °C
          </button>
          <p className="mx-1 text-xl text-white">|</p>
          <button
            name="imperial"
            className="text-xl font-light text-white transition ease-out hover:scale-125"
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
