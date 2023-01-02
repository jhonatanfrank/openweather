import React from "react";
import Spinner from "./Spinner";

const Card = ({ loadingData, showData, weather, forecast }) => {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = day + "/" + month + "/" + year;

  var url = "";
  var iconUrl = "";

  var iconUrl3 = "";
  var iconUrl6 = "";
  var iconUrl9 = "";

  var forecastDate3 = "";
  var forecastDate6 = "";
  var forecastDate9 = "";

  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 =
      forecast.list[1].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[1].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[1].dt_txt.substring(0, 4) +
      " " +
      forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 =
      forecast.list[2].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[2].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[2].dt_txt.substring(0, 4) +
      " " +
      forecast.list[2].dt_txt.substring(11, 13);
    forecastDate9 =
      forecast.list[3].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[3].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[3].dt_txt.substring(0, 4) +
      " " +
      forecast.list[3].dt_txt.substring(11, 13);
  }

  return (
    <>
      <div className="mt-5">
        {showData === true ? (
          <>
            <div class="container-clima">
              <h1>{weather.name} - {date}</h1>
              <h2>
                {(weather.main.temp - 273.15).toFixed(1)}ºC
              </h2>
              <img src={iconUrl} alt="icon" />
              <h1>
                {weather.weather[0].description}
              </h1>
            </div>
            <div class="container-clima">

              <div>
                <img
                  src="https://images.pexels.com/photos/10817264/pexels-photo-10817264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="..."
                  className="imagen-clima"
                />
              </div>


              <div>
                <div>
                  <h5>
                    Temperatura máxima:{" "}
                    {(weather.main.temp_max - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5>
                    Temperatura mínima:{" "}
                    {(weather.main.temp_min - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5>
                    sensación térmica:{" "}
                    {(weather.main.feels_like - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5>
                    Humedad: {weather.main.humidity}%
                  </h5>
                  <h5>
                    Velocidad del viento: {weather.wind.speed}m/s
                  </h5>
                </div>
                <hr />
                <div class="container-clima">
                  <div>
                    <p>{forecastDate3}h</p>
                    <p>
                      <img src={iconUrl3} alt="icon" />
                      {forecast.list[1].weather[0].description}
                    </p>
                    <p>
                      {(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                  <div>
                    <p>{forecastDate6}h</p>
                    <p>
                      <img src={iconUrl6} alt="icon" />
                      {forecast.list[2].weather[0].description}
                    </p>
                    <p className="temp">
                      {(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                  <div>
                    <p>{forecastDate9}h</p>
                    <p className="description">
                      <img src={iconUrl9} alt="icon" />
                      {forecast.list[3].weather[0].description}
                    </p>
                    <p className="temp">
                      {(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </>
        ) : (
          <h2 className="text-light">Sin datos</h2>
        )}
      </div>
    </>
  );
}

export default Card;
