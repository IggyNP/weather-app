import axios from "axios";

const getWeatherData = (
  location,
  unit,
  setStateData,
  setStateError = () => {}
) => {
  const options = {
    method: "GET",
    url: "https://yahoo-weather5.p.rapidapi.com/weather",
    params: { location: location, format: "json", u: unit },
    headers: {
      "X-RapidAPI-Key": "7897fff9d7msh5c261e0b7ab5db4p1e78f2jsn6bd16a6fba4a",
      "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setStateData(response.data);
    })
    .catch(function (error) {
      setStateError(error);
    });
};

export default getWeatherData;
