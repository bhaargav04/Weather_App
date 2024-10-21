import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import Current from './Components/Current';
import Forecast from './Components/Forecast';
import '../node_modules/bootstrap/dist/js/bootstrap';

const App = () => {
  const [city, setCity] = useState();
  const [clickedCity, setClickedCity] = useState();
  const [citySuggest, setCitySuggest] = useState([]);
  const [current, setCurrent] = useState();
  const [location, setLocation] = useState();
  const [forecast, setForecast] = useState();

  const AutoComplete = "https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q=";

  const WeatherAPI = (city) => `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`

  // I use useEffect to fecth a api from  fectchAutoComplete function
  useEffect(() => {
    if (city && city.length > 3) {
      fetchAutoComplete();
    }
  }, [city]);

  // this function fetch a Autocomplete API
  const fetchAutoComplete = async () => {

    try {
      const response = await axios.get(AutoComplete + city);
      const res = response.data;
      console.log('API Called:', res);
      const cityData = res.map((city) => {
        return `${city.name},${city.region},${city.country}`;
      });
      setCitySuggest(cityData);
    } catch (e) {
      console.log('error', e);
    }

  }

  // here i assign the api's result to variable selectedCity
  const selectedCity = (city) => {
    console.log('Clicked City', city);
    setClickedCity(city);
    fetchWeatherAPI(city);
    setCitySuggest([]);
  }

  // this function fetch weather API
  const fetchWeatherAPI = async (city) => {
    try {
      const response = await axios.get(WeatherAPI(city));
      const res = response.data;

      // here i assign the api data to the useState 
      setCurrent(res.current);
      setLocation(res.location);
      setForecast(res.forecast);

      // this print in the console as a API result
      console.log('Current',res.current);
      console.log('Forecast',res.forecast);
      console.log('Location',res.location);

    } catch (e) {
      console.log('weather API error', e);
    }
  }

  return (
    <>
    <h1 className="text-center mt-5" style={{fontFamily:''}}>Weather Forecast</h1>
    <div className='container bg-primary p-5  mt-5' style={{borderRadius:'30px'}}>
      <input type="text" value={clickedCity} className='form-control  border border-secondary' placeholder="Enter Your City Name" onChange={(e) => { setCity(e.target.value);
      if(e.target.value===""){
        setCurrent();
        setLocation();
        setClickedCity();
        setForecast();
      }
       }} style={{borderRadius:'12px'}}/>
    
      {/* Down here i get a autocomple api and store in a city variable using selectedCity function */}
      {citySuggest && citySuggest.map((city) => {
        return <div className="text-center bg-info rounded p-1 bg-opacity-10 border border-info border-opacity-25 text-white" style={{ cursor: 'pointer' }} onClick={() => selectedCity(city)}>
          {city}
        </div>
      })}
      </div>

      {clickedCity && <div className='container bg-primary p-5 rounded mt-5'>
      {/* It's use the usestate current,location to this props down here */}
      {current && <Current current={current} location={location}/>} 
      {/* Down here its a conditional rendering and i send props to the forecast as a forecast */}
      {forecast && <Forecast forecast={forecast} location={location}/>} 
      </div>}
    </>
  )
}


export default App
