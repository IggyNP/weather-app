import UilReact from "@iconscout/react-unicons/icons/uil-react";
import SearchBar from "./components/SearchBar";
import TempAndInfo from "./components/TempAndInfo";
import TimeAndLoc from "./components/TimeAndLoc";

function App() {
  return (
    <div className="shadow-grey-400 mx-auto mt-4 h-fit max-w-screen-md bg-gradient-to-br from-cyan-700 to-blue-700 py-5 px-32 shadow-xl">
      <SearchBar />
      <TimeAndLoc />
      <TempAndInfo />
    </div>
  );
}

export default App;
