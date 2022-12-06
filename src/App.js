import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Santa Cruz" />

        <footer>
          This project is created by{" "}
          <a
            href="https://pl.linkedin.com/in/estera-pietkiewicz-6b7558178"
            target="_blank"
            rel="noopener noreferrer"
          >
            Estera Pietkiewicz
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/latin-bubel/react-weather-app-by-latinbubel"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced
          </a>
          ✨
        </footer>
      </div>
    </div>
  );
}
