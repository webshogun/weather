import { useState, useEffect } from 'react';
import { WeatherIcons } from './WeatherIcons';

const Home = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
        const weatherData = await response.json();
        const { name, sys: {country}, main: {temp, pressure, humidity}, weather: [{icon, description}], wind: {speed} } = weatherData;
        setWeather({ name, country, temp, icon, description, speed, humidity, pressure})
      } catch (error) {
        console.log(error)
      }
    }
    fetchWeatherData();
  }, [])

  return ( 
    <>
      <form className='search'>
        <input className='search-bar' type='text' placeholder='Type some city...' />
        <input className='search-button' type='submit' value='Search' />
      </form>
      <h1 className='title'>Weather in {weather.name}, {weather.country}</h1>
      <div className='wrapper'>
        <img className='icon' src={WeatherIcons[weather.icon]} alt='Weather status icon' />
        <div className='info'>
          <span className='temp'>{weather.temp}°</span>
          <p className='description'>{weather.description}</p>
        </div>
      </div>
      <div className='wrapper'>
        <div className='wind'>
          <img src='/icons/wind.svg' alt='Wind icon' />
          <span>{weather.speed} m/s</span>
        </div>
        <div className='humidity'>
          <img src='/icons/humidity.svg' alt='Humidity icon' />
          <span>{weather.humidity}%</span>
        </div>
        <div className='pressure'>
          <img src='/icons/pressure.svg' alt='Pressure icon' />
          <span>{weather.pressure}</span>
        </div>
      </div>
    </>
   );
}
 
export default Home;