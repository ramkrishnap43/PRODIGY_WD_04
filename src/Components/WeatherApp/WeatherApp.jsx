import React from 'react';
import "./WeatherApp.css";
import search_icon from "../Images/search.png";
import clear_icon from "../Images/clear.png";
import cloud_icon from "../Images/cloud.png";
import drizzle_icon from "../Images/drizzle.png";
import humidity_icon from "../Images/humidity.png";
import rain_icon from "../Images/rain.png";
import snow_icon from "../Images/snow.png";
import wind_icon from "../Images/wind.png";


const WeatherApp = () => {

    let api_key = "dd2ed5b457ffdc0de7296a1133b72240";

    const handleSearch = async () => {
        const element = document.getElementsByClassName("cityInput");

        if(element[0].value === ""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        
        let response = await fetch(url);
        let data = response.json()
    
    }

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className='cityInput' placeholder='Search City' />
            <div className="search_icon" onClick={() => {handleSearch()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather_image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather_temp">55c</div>
        <div className="weather_location">London</div>
        <div className="data_container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity">65%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            {/* 2nd */}
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-speed">18 km/hr</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WeatherApp