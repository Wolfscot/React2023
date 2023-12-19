import React, { useState, useEffect } from 'react';

const API_KEY = 'YOUR_ACCUWEATHER_API_KEY'; // Replace with your AccuWeather API key

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cityName, setCityName] = useState('');
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`);
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            const cityKey = data[0].Key;
            const weatherResponse = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}`);
            if (weatherResponse.ok) {
              const weatherData = await weatherResponse.json();
              setWeather(weatherData[0]);
            }
          }
        }
        setIsLoading(false);
        setSearching(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        setSearching(false);
      }
    };

    if (searching && cityName !== '') {
      fetchWeather();
    }
  }, [searching, cityName]);

  const handleSearch = () => {
    setSearching(true);
  };

  return (
    <div className="weather-app">
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name..."
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : weather ? (
        <div className="weather-info">
          <h2>Current Weather in {weather.LocalObservationDateTime}</h2>
          <p>Temperature: {weather.Temperature.Imperial.Value}°{weather.Temperature.Imperial.Unit}</p>
          <p>Weather: {weather.WeatherText}</p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default WeatherApp;
