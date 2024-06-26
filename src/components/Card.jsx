import React, { useEffect, useState } from "react";
import Search from "./Search";
import Weather from "./Weather";
import ShimmerUi from "./ShimmerUi";

function Card() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const URL = "https://api.openweathermap.org/data/2.5/weather?";
  const appid = "e34b4c51d8c2b7bf48d5217fe52ff79e";

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(`${URL}q=${param}&appid=${appid}`);
      const data = await response.json();
      setLoading(false);
      if (!response.ok) {
        throw new Error("Invalid city name");
      }
      if (data) {
        setWeatherData(data);
        // console.log(data);
      }
    } catch (error) {
      setErrorMessage("Invalid input, Please enter a valid city name.");
      setLoading(false);
    }
  }

  function handleSearch() {
    if (search !== "") {
      fetchWeatherData(search);
      setSearchClicked(true);
      setErrorMessage("");
    } else {
      alert("Enter a City name to see result");
    }
  }

  const information = {
    cityName: weatherData?.name,
    country: weatherData?.sys.country,
    weatherNow: weatherData?.weather[0]?.main,
    temp: weatherData?.main.temp,
    img: weatherData?.main?.icon,
    humidity: weatherData?.main?.humidity,
    windSpeed: weatherData?.wind?.speed,
  };

  return (
    <div className=" flex flex-col justify-center items-center w-[100vw] h-[100vh]">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        errorMessage={errorMessage}
      />
      {searchClicked && (
        <>
          {errorMessage ? (
            <div>
              <h1 className="text-red-500 text-2xl font-bold mt-4">
                {errorMessage}
              </h1>
            </div>
          ) : (
            <>
              {loading ? <ShimmerUi /> : <Weather information={information} />}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Card;
