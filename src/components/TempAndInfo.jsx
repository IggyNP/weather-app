import React from "react";
import getImageUrl from "../utils/getImageUrl";
import {
  UilArrowDownRight,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilTemperatureMinus,
  UilTemperaturePlus,
} from "@iconscout/react-unicons";

const TempAndInfo = ({ apiData }) => {
  console.log(apiData);

  if (apiData)
    return (
      <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
          <p>{apiData.current_observation.condition.text}</p>
        </div>
        <div className="flex w-full flex-row items-center justify-between py-3 text-white">
          <img
            src={getImageUrl(apiData.current_observation.condition.text)}
            alt=""
            className="w-20"
          />
          <p className="text-5xl text-white sm:text-7xl">
            {apiData.current_observation.condition.temperature} °C
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-center text-sm font-light">
              <UilTear size={18} className="mr-1" />
              <p className="mr-1">Humidity:</p>
              <span className="font-medium">
                {apiData.current_observation.atmosphere.humidity} %
              </span>
            </div>
            <div className="flex items-center justify-center text-sm font-light">
              <UilWind size={18} className="mr-1" />
              <p className="mr-1">Wind:</p>
              <span className="font-medium">
                {apiData.current_observation.wind.speed} km/h
              </span>
            </div>
            <div className="flex items-center justify-center text-sm font-light">
              <UilArrowDownRight size={18} className="mr-1" />
              <p className="mr-1">Direction:</p>
              <span className="font-medium">
                {apiData.current_observation.wind.direction}
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-center space-x-2 py-3 text-sm text-white">
          <UilSun />
          <p className="font-light">
            Rise:{" "}
            <span className="ml-1 font-medium">
              {apiData.current_observation.astronomy.sunrise}
            </span>
          </p>
          <p className="ml-1 font-light">|</p>
          <UilSunset />
          <p className="font-light">
            Set:{" "}
            <span className="ml-1 font-medium">
              {apiData.current_observation.astronomy.sunset}
            </span>
          </p>
          <p className="ml-1 font-light">|</p>
          <UilTemperaturePlus />
          <p className="font-light">
            High:{" "}
            <span className="ml-1 font-medium">
              {apiData.forecasts[0].high} °C
            </span>
          </p>
          <p className="ml-1 font-light">|</p>
          <UilTemperatureMinus />
          <p className="font-light">
            Low:{" "}
            <span className="ml-1 font-medium">
              {" "}
              {apiData.forecasts[0].low} °C
            </span>
          </p>
        </div>
      </div>
    );
};

export default TempAndInfo;
