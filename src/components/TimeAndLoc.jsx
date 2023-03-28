import React from "react";
import { DateTime } from "luxon";

const TimeAndLoc = ({ apiData }) => {
  const localTime = DateTime.local()
    .setZone(apiData?.location.timezone_id)
    .toLocaleString(DateTime.TIME_SIMPLE);
  const date = DateTime.local()
    .setZone(apiData?.location.timezone_id)
    .toFormat("cccc, dd LLLL yyyy");

  if (apiData)
    return (
      <div>
        <div className="my-6 flex items-center justify-center">
          <p className="text-l font-extralight text-white sm:text-xl">
            {date} | Local time: {localTime}
          </p>
        </div>
        <div className="my-3 flex items-center justify-center">
          <p className="text-2xl font-medium text-white sm:text-3xl">
            {apiData?.location.city}, {apiData?.location.country}
          </p>
        </div>
      </div>
    );
  return "";
};

export default TimeAndLoc;
