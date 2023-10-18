import React, { useState } from 'react';
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


    const [weatherIcon , setWeatherIcon] = useState(cloud_icon)




    const handleSearch = async () => {
        const element = document.getElementsByClassName("cityInput");

        if(element[0].value === ""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        
        let response = await fetch(url);
        let data = await response.json();

        let humidity = document.getElementsByClassName("humidity")
        let wind = document.getElementsByClassName("wind-speed");
        let temperature = document.getElementsByClassName("weather_temp");
        let location = document.getElementsByClassName("weather_location");

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = Math.floor(data.wind.speed)+ "km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp)+ "°C";
        location[0].innerHTML = data.name;


        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
            setWeatherIcon(clear_icon)
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWeatherIcon(cloud_icon)
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setWeatherIcon(drizzle_icon)
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWeatherIcon(drizzle_icon)
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setWeatherIcon(rain_icon)
        }
        else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWeatherIcon(rain_icon)
        }
        else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setWeatherIcon(snow_icon)
        }
        else{
            setWeatherIcon(clear_icon)
        }



    
    }

  return (
    <div className='mainContainer'>
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className='cityInput' placeholder='Search City' />
            <div className="search_icon" onClick={() => {handleSearch()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather_image">
            <img src={weatherIcon} alt="" />
        </div>
        <div className="weather_temp">31°C</div>
        <div className="weather_location">Mumbai</div>
        <div className="data_container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity">66%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            {/* 2nd */}
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-speed">4km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default WeatherApp