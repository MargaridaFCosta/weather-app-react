import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import { MagnifyingGlass } from "react-loader-spinner";
import "./Weather.css";


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
    console.log(response.data);
    setWeather({
      ready: true,
      date: new Date(response.data.time * 1000),
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
        <form onSubmit={handleSubmit} className="text-center mb-5">
          <div className="row">
          <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
            autoFocus="on"
            className="form-control"
              />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary search-button" />
              </div>
              </div>
        </form>
        <WeatherInfo data={weather} />
      </div>
    );                              
  } else {
    search();
    return (
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    );
  }
}