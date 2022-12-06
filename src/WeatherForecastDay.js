import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temperature.maximum);
    return `${maxTemp}°`;
  }

  function minTemperature() {
    let minTemp = Math.round(props.data.temperature.minimum);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day"> {day()}</div>

      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
