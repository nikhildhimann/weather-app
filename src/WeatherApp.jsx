import React, { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherInfo from "./WeatherInfo";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;   // Replace with your OpenWeatherMap API key

function WeatherApp() {
  const [weather, setWeather] = useState(null);

  const getWeather = async (city) => {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
          
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found!");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <SearchBox onSearch={getWeather} />
      {weather && <WeatherInfo data={weather} />}
    </>
  );
}

export default WeatherApp;
