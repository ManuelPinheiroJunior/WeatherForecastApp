export type optionType = {
  name: string
  country: string
  lat: number
  lon: number
}

export type forecastType = {
  name: string
  country: string
  list: [
    {
      dt: number
      main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
        sea_level: number
      }
      weather: [
        {
          main: string
          icon: string
          description: string
        }
      ]
      wind: {
        speed: number
        gust: number
        deg: number
      }
      clouds: {
        all: number
      }
      pop: number
      visibility: number
    }
  ]
  sunrise: number
  sunset: number
}

export type currentWeatherType = {
  city: string
  main: {
    temp: number
    feels_like: number
    humidity: number
    pressure: number
  }
  weather:[
   {
    icon: string
    description: string
   } 
  ]
  wind: {
    speed: number
    gust: number
    deg: number
  }
}