import React, { useEffect, useState } from "react";
import "./weather.css"; // Assuming you have a CSS file for styling
import axios from "axios";
const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const apikey = import.meta.env.VITE_WEATHER_API;

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&units=metric`;
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setData({}); // Reset data on error
    }
    setLocation(""); // Clear input after search
  };

  const handkeydown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  }

  useEffect(() => {
    const fetchWeather = async () => {
      const defaultLocation = "Rasipuram"; // Default location if none is provided
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&appid=${apikey}&units=metric`;
      const response = await axios.get(url);
      setData(response.data);
    };

    fetchWeather();
  }, []);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const getweatherIcon = (weather) => {
    switch (weather) {
      case "Clear":
        return "fa-solid fa-sun";
      case "Clouds":
        return "fa-solid fa-cloud";
      case "Rain":
        return "fa-solid fa-cloud-rain";
      case "Snow":
        return "fa-solid fa-snowflake";
      case "Thunderstorm":
        return "fa-solid fa-bolt";
      default:
        return "fa-solid fa-cloud"; // Default icon for unknown weather
    }
  }
  return (
    <div className="weather">
      <div className="search">
        <div className="search-top">
          <i className="fa-solid fa-location-dot"></i>
          <div className="location">{data.name}</div>
        </div>
        <div className="search-location" onKeyDown={handkeydown}>
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={handleInputChange}
          />
          <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
        </div>
      </div>

      {data.weather ? (
        <div className="weather-data">
          <i className={getweatherIcon(data.weather[0].main)}></i>
          <div className="weather-type">{data.weather[0].main}</div>
          <div className="temp">{`${Math.floor(data.main.temp)}°`}</div>
        </div>
      ) : (
        <div className="error-message">Please enter a valid city name.</div>
      )}
    </div>
  );
};

export default Weather;
