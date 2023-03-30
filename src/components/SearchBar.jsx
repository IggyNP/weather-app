import React, { useEffect, useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import getWeatherData from "../api/weatherApi";

const SearchBar = ({ setApiData }) => {
  const [city, setCity] = useState();
  const [units, setUnits] = useState("c");

  const handleUseWeatherApi = (city, units, setApiData) => {
    getWeatherData(city, units, setApiData);
  };

  useEffect(() => {
    handleUseWeatherApi(city, units, setApiData);
  }, [units]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-4 flex flex-row justify-center text-white">
        <h1 className="text-xl sm:text-3xl">Check out a city's weather</h1>
      </div>
      <div className="flex w-full flex-row items-center justify-center space-x-4">
        <input
          onChange={(e) => {
            setCity(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleUseWeatherApi(city, units, setApiData);
            }
          }}
          type="text"
          placeholder="search..."
          className="text-l w-full p-2 font-light capitalize shadow-xl placeholder:lowercase focus:outline-none sm:text-xl"
        />
        <UilSearch
          onClick={() => {
            handleUseWeatherApi(city, units, setApiData);
          }}
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
            onClick={() => {
              setUnits("c");
            }}
          >
            °C
          </button>
          <p className="mx-1 text-xl text-white">|</p>
          <button
            name="imperial"
            className="text-xl font-light text-white transition ease-out hover:scale-125"
            onClick={() => {
              setUnits("f");
            }}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
