import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="WeatherForecast-day"> {props.data.time}</div>

      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {props.data.temperature.maximum}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {props.data.temperature.minimum}°
        </span>
      </div>
    </div>
  );
}
