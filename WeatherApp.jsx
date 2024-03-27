import SeachBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setweatherInfo] = useState({
    city: "Mumbai",
    feelsLike: 24.84,
    temp: 25,
    tempMin: 25,
    tempMax: 25,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setweatherInfo(newInfo);
  };

  return (
    <div>
      <h2>Weather App</h2>
      <SeachBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
