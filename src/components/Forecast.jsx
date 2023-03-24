import React from "react";

const Forecast = () => {
  return (
    <div className="text-white">
      <div className="mt-6 flex items-center justify-start">
        <p className="font-medium uppercase">Daily Forecast</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">04:30PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12"
          />
          <p className="text-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">04:30PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12"
          />
          <p className="text-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">04:30PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12"
          />
          <p className="text-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">04:30PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12"
          />
          <p className="text-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-light">04:30PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12"
          />
          <p className="text-medium">22°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
