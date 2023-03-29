import React from "react";
import getImageUrl from "../utils/getImageUrl";

const Forecast = ({ apiData }) => {
  console.log(apiData);
  if (apiData)
    return (
      <div className="text-white">
        <div className="mt-6 flex items-center justify-start">
          <p className="font-medium uppercase">Daily Forecast</p>
        </div>
        <hr className="my-2" />
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-light">{apiData.forecasts[0].day}</p>
            <img
              src={getImageUrl(apiData.forecasts[0].text)}
              alt=""
              className="w-12"
            />
            <p className="text-medium">High: {apiData.forecasts[0].high}°</p>
            <p className="text-medium">Low: {apiData.forecasts[0].low}°</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-light">{apiData.forecasts[1].day}</p>
            <img
              src={getImageUrl(apiData.forecasts[1].text)}
              alt=""
              className="w-12"
            />
            <p className="text-medium">High: {apiData.forecasts[1].high}°</p>
            <p className="text-medium">Low: {apiData.forecasts[1].low}°</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-light">{apiData.forecasts[2].day}</p>
            <img
              src={getImageUrl(apiData.forecasts[2].text)}
              alt=""
              className="w-12"
            />
            <p className="text-medium">High: {apiData.forecasts[2].high}°</p>
            <p className="text-medium">Low: {apiData.forecasts[2].low}°</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-light">{apiData.forecasts[3].day}</p>
            <img
              src={getImageUrl(apiData.forecasts[3].text)}
              alt=""
              className="w-12"
            />
            <p className="text-medium">High: {apiData.forecasts[3].high}°</p>
            <p className="text-medium">Low: {apiData.forecasts[3].low}°</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-light">{apiData.forecasts[4].day}</p>
            <img
              src={getImageUrl(apiData.forecasts[4].text)}
              alt=""
              className="w-12"
            />
            <p className="text-medium">High: {apiData.forecasts[4].high}°</p>
            <p className="text-medium">Low: {apiData.forecasts[4].low}°</p>
          </div>
        </div>
      </div>
    );
};

export default Forecast;
