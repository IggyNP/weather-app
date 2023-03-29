const getImageUrl = (conditionText) => {
  switch (conditionText.toLowerCase()) {
    case "tornado":
      return "https://openweathermap.org/img/wn/50d.png";
    case "tropical storm":
    case "hurricane":
      return "https://openweathermap.org/img/wn/01d.png";
    case "severe thunderstorms":
    case "thunderstorms":
    case "isolated thunderstorms":
      return "https://openweathermap.org/img/wn/11d.png";
    case "mixed rain and snow":
    case "mixed rain and sleet":
    case "mixed snow and sleet":
    case "freezing drizzle":
    case "drizzle":
    case "freezing rain":
    case "showers":
    case "scattered showers":
      return "https://openweathermap.org/img/wn/09d.png";
    case "snow flurries":
    case "light snow showers":
    case "blowing snow":
    case "snow":
    case "heavy snow":
    case "scattered snow showers":
      return "https://openweathermap.org/img/wn/13d.png";
    case "hail":
    case "sleet":
      return "https://openweathermap.org/img/wn/10d.png";
    case "dust":
    case "foggy":
    case "haze":
    case "smoky":
      return "https://openweathermap.org/img/wn/50d.png";
    case "blustery":
    case "windy":
      return "https://openweathermap.org/img/wn/50d.png";
    case "cold":
      return "https://openweathermap.org/img/wn/13d.png";
    case "cloudy":
      return "https://openweathermap.org/img/wn/03d.png";
    case "mostly cloudy":
    case "partly cloudy":
    case "partly sunny":
      return "https://openweathermap.org/img/wn/02d.png";
    case "clear":
    case "sunny":
      return "https://openweathermap.org/img/wn/01d.png";
    default:
      return "";
  }
};

export default getImageUrl;
