import { ChangeEvent, useState } from "react";


import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";
import { optionType } from "./types";
import { Forecast } from "./components/forecast";
import { Search } from "./components/search";
import { CurrentWeather } from "./components/current-weather";

type Props = {
    term: string
    searchData: 
    {
        value: string
        label: string
    }
    inputValue: string
    options: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionSelect: (option: optionType) => void
    onSubmit: () => void
    onSearchChange: (searchData: Props) => void
  }


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  console.log("🚀 ~ file: App.tsx:29 ~ App ~ currentWeather:", currentWeather)
  const [forecast, setForecast] = useState(null);
  console.log("🚀 ~ file: App.tsx:30 ~ App ~ forecast:", forecast)

  const handleOnSearchChange = (searchData : any) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };



  return (
      <div className="container"> 
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      </div>
  );
}

export default App;