import React from "react";
import "./App.css";

function WeatherInfo({ data }) {
  const { name, main, weather, sys } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-info-card">
      <h2 className="location">{name}, {sys.country}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p className="description">{weather[0].description}</p>

      <div className="weather-details">
        <ul className="list">
          <li>🌡️ <strong>Temp:</strong> {main.temp}°C</li>
          <li>💧 <strong>Humidity:</strong> {main.humidity}%</li>
        </ul>
      </div>
    </div>
  );
}

export default WeatherInfo;
