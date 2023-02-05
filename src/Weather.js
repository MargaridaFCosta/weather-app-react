import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
       let apiKey = "ato2b04e4f46da013787d91355bf798f";
       let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
       axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    setWeather({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      city: response.data.city,
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
          />
          <input type="submit" value="Search"/>
        </form>
        <WeatherInfo data={weather} />
      </div>
    );                              
  } else {
    search();
    return "Loading...";
  }
}