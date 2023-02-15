import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxtemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}º`;
  }
  function mintemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div class="WeatherForecastDay mt-4">
      <div className="text-center"> {day()}</div>
      <div>
        {" "}
        <img
          alt="icon"
          src={props.data.condition.icon_url}
          className="forecast-icon"
        />{" "}
      </div>
      <div className="temperature">
        <span className="max-temperature"> {maxtemperature()} </span>
        <span className="min-temperature text-muted"> {mintemperature()} </span>
      </div>
    </div>
  );
}
