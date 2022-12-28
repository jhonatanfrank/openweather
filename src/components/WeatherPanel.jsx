import React, { useState } from 'react'
import Card from './Card';
import Form from './Form';

const WeatherPanel = () => {

  //Consumo de la api
  let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=4ca1f8214b9a42bbe5f40000e58aebb5&lang=es"
  let cityUrl = "&q=";

  let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=4ca1f8214b9a42bbe5f40000e58aebb5&lang=es"

  const [weather, setWeather] = useState([])
  const [forecast, setForecast] = useState([])

  //Spinner de carga
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [location, setLocation] = useState("")

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    //llamada a weather
    urlWeather = urlWeather + cityUrl + loc
    await fetch(urlWeather).then((response) => {
      if (!response.ok) throw { response }
      return response.json()
    }).then((weatherData) => {
      console.log(weatherData)
      setWeather(weatherData)
    }).catch(error => {
      console.log(error)
      setLoading(false)
      setShow(false)
    })

    //forecast
    urlForecast = urlForecast + cityUrl + loc
    await fetch(urlForecast).then((response) => {
      if (!response.ok) throw { response }
      return response.json()
    }).then((forecastData) => {
      console.log(forecastData)
      setForecast(forecastData)

      setLoading(false);
      setShow(true);

    }).catch(error => {
      console.log(error)
      setLoading(false)
      setShow(false)
    })
  }

  return (
    <div>
      <Form
        newLocation={getLocation}
      />

      <Card
        showData={show}
        loadingData={loading}
        weather={weather}
        forecast={forecast}
      />
    </div>
  )
}

export default WeatherPanel 