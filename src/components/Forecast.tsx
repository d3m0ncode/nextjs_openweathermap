"use client";

import { UseWeatherMap } from "@/hooks/UseWeatherMap";
import React, { useEffect } from "react";
import styled from "styled-components";
 
const Forecast = () => {
  ////hook
  const { getForecast, forecast, coordinates } = UseWeatherMap();

  useEffect(() => {
    getForecast();
  }, [coordinates]);

  ////verificar si esta cargando
  if (!forecast) {
    return <h2>cargando...</h2>;
  }

  return (
    forecast.length > 0 && (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Pronóstico de lluvia
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {forecast.map((forecast, index) => (
            <WeatherCard key={index} className="shadow-md rounded-lg p-4">
              <p className="font-bold text-lg text-black ">
                {new Date(forecast.dt_txt).toLocaleString()}
              </p>
              <p className="text-xl text-black">
                Temp: {forecast.main.temp.toFixed(1)}°C
              </p>
              {forecast.weather && forecast.weather[0] && (
                <p className="text-black capitalize">
                  {forecast.weather[0].description}
                </p>
              )}
              {forecast.rain && forecast.rain["3h"] ? (
                <p className="text-black font-semibold">
                  Lluvia: {forecast.rain["3h"]} mm en las últimas 3 horas
                </p>
              ) : (
                <p className="text-black">No se espera lluvia</p>
              )}
              <p className="text-black">Humedad: {forecast.main.humidity}%</p>
            </WeatherCard>
          ))}
        </div>
      </div>
    )
  );
};

export default Forecast;

const WeatherCard = styled.div`
  background: #093028;
  background: -webkit-linear-gradient(
    to right,
    rgba(35, 122, 87, 0.8),
    rgba(9, 48, 40, 0.8)
  );
  background: linear-gradient(
    to right,
    rgba(23, 255, 162, 0.486),
    rgba(186, 11, 255, 0.674)
  );
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  border-radius: 0.5rem;
  padding: 1.5rem;
  max-width: 20rem;
`;
