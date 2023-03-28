import { useState } from "react";
import Forecast from "./components/Forecast";
import SearchBar from "./components/SearchBar";
import TempAndInfo from "./components/TempAndInfo";
import TimeAndLoc from "./components/TimeAndLoc";

function App() {
  const [apiData, setApiData] = useState();

  return (
    <div className="shadow-grey-400 mx-auto h-screen w-full bg-gradient-to-br from-cyan-700 to-blue-700 py-5 px-16 shadow-xl sm:px-32">
      <SearchBar setApiData={setApiData} />
      <TimeAndLoc apiData={apiData} />
      <TempAndInfo />
      <Forecast />
    </div>
  );
}

export default App;
