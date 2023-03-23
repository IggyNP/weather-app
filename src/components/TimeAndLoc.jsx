import React from "react";

const TimeAndLoc = () => {
  return (
    <div>
      <div className="my-6 flex items-center justify-center">
        <p className="text-l font-extralight text-white sm:text-xl">
          Tuesday, 22 March 2023 | Local time: 05:40 PM
        </p>
      </div>
      <div className="my-3 flex items-center justify-center">
        <p className="text-2xl font-medium text-white sm:text-3xl">
          Marbella, Spain
        </p>
      </div>
    </div>
  );
};

export default TimeAndLoc;
