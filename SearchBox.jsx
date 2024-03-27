import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

export default function SeachBox({ updateInfo }) {
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "797380b6f44db357544564eeaada0f80";
  let [City, setCity] = useState("");
  let [Error, setError] = useState(false);

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${City}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: City,
        temp: jsonResponse.main.temp,
        tempmin: jsonResponse.main.temp_min,
        tempmax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let onSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(City);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          required
          value={City}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Send
        </Button>
        <br></br>
        {Error && <p style={{ color: "red" }}>No such place Exists</p>}
        <br></br>
      </form>
    </div>
  );
}
