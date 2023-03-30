import { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import SearchBar from "./components/SearchBar";
import TempAndInfo from "./components/TempAndInfo";
import TimeAndLoc from "./components/TimeAndLoc";
import { PulseLoader } from "react-spinners";
import getWeatherData from "./api/weatherApi";

function App() {
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="shadow-grey-400 mx-auto h-screen w-full bg-gradient-to-br from-cyan-700 to-blue-700 py-5 px-16 shadow-xl sm:px-32">
      <SearchBar setApiData={setApiData} />
      {isLoading ? (
        <PulseLoader color="#36d7b7" />
      ) : (
        <>
          <TimeAndLoc apiData={apiData} />
          <TempAndInfo apiData={apiData} />
          <Forecast apiData={apiData} />
        </>
      )}
    </div>
  );
}

export default App;
