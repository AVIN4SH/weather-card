import React from "react";
import WeatherIcon from "../assets/weather-icons.avif";

function Weather({ information }) {
  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div className="text-center card sm:card-side w-11/12 sm:w-10/12 lg:w-5/12  bg-base-100 sm:shadow-2xl mx-auto my-2 sm:my-4 p-2 sm:p-4">
      <figure>
        {/* <img
          src={WeatherIcon}
          alt="Movie"
          className="w-[240px] h-[280px] bg-no-repeat bg-cover"
        /> */}
      </figure>
      <div className="card-body px-14">
        <p className="my-0  flex flex-col">
          <span className="text-3xl my-0">{information.cityName}</span>
          <span className="text-md my-0 ">{information.country}</span>
        </p>
        <p className="my-0">
          <span>{getCurrentDate()}</span>
          <br />
          <span>{information.weatherNow}</span>
          <br />
          <span>Temperature: {(information.temp - 273.15).toFixed(2)} °C</span>
          <br />
          <span>Humidity: {information.humidity}%</span>
          <br />
          <span>Wind Speed: {information.windSpeed}km/hr</span>
          <br />
        </p>
      </div>
    </div>
  );
}

export default Weather;
