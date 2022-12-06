import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showToFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showToCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit == "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showToFah}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheitTemperature = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheitTemperature)}</span>
        <span className="unit">
          <a href="/" onClick={showToCel}>
            {" "}
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
