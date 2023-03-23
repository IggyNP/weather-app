import UilReact from "@iconscout/react-unicons/icons/uil-react";
import Forecast from "./components/Forecast";
import SearchBar from "./components/SearchBar";
import TempAndInfo from "./components/TempAndInfo";
import TimeAndLoc from "./components/TimeAndLoc";

function App() {
  return (
    <div className="shadow-grey-400 mx-auto h-screen w-full bg-gradient-to-br from-cyan-700 to-blue-700 py-5 px-16 shadow-xl sm:px-32">
      <SearchBar />
      <TimeAndLoc />
      <TempAndInfo />
      <Forecast title="Hourly Forecast" />
      <Forecast title="Daily Forecast" />
    </div>
  );
}

export default App;
