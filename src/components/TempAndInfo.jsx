import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilTemperatureMinus,
  UilTemperaturePlus,
} from "@iconscout/react-unicons";

const TempAndInfo = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Clear</p>
      </div>
      <div className="flex w-full flex-row items-center justify-between py-3 text-white">
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl text-white sm:text-7xl">27°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-center text-sm font-light">
            <UilTemperature size={18} className="mr-1" />
            <p className="mr-1">Real feel:</p>
            <span className="font-medium">32°</span>
          </div>
          <div className="flex items-center justify-center text-sm font-light">
            <UilTear size={18} className="mr-1" />
            <p className="mr-1">Humidity:</p>
            <span className="font-medium">25%</span>
          </div>
          <div className="flex items-center justify-center text-sm font-light">
            <UilWind size={18} className="mr-1" />
            <p className="mr-1">Wind:</p>
            <span className="font-medium">20km/h</span>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-center space-x-2 py-3 text-sm text-white">
        <UilSun />
        <p className="font-light">
          Rise: <span className="ml-1 font-medium">7:30AM</span>
        </p>
        <p className="ml-1 font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set: <span className="ml-1 font-medium">8:00PM</span>
        </p>
        <p className="ml-1 font-light">|</p>
        <UilTemperaturePlus />
        <p className="font-light">
          High: <span className="ml-1 font-medium">27°</span>
        </p>
        <p className="ml-1 font-light">|</p>
        <UilTemperatureMinus />
        <p className="font-light">
          Low: <span className="ml-1 font-medium">17°</span>
        </p>
      </div>
    </div>
  );
};

export default TempAndInfo;
