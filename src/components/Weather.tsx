"use client";
import { UseWeatherMap } from "@/hooks/UseWeatherMap";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
const Weather = () => {
  /////LAMAR HOOK
  const { getWeather, coordinates, weather, isLoading } = UseWeatherMap();

  useEffect(() => {
    getWeather();
  }, [coordinates]);

  //// Verificar si está cargando o si no hay datos
  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  if (!weather || !weather?.main || !weather?.weather) {
    return <h2>Datos del clima no disponibles...</h2>;
  }

  return (
    <div className="flex justify-center pt-7 items-center ">
      {!weather ? (
        <h2>cargando....</h2>
      ) : (
        <WeatherCard className=" shadow-md rounded-lg p-6 max-w-xs">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Clima en {weather.name}
          </h2>
          <div className="flex justify-between items-center">
            <p className="text-4xl font-bold">
              {weather.main.temp.toFixed(1)}°C
            </p>
            <Image
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="w-20 h-20"
              width={100}
              height={100}
            />
          </div>
          <p className="text-black capitalize text-center mt-2">
            {weather.weather[0].description}
          </p>
          <div className="mt-4">
            <p>Humedad: {weather.main.humidity}%</p>
            <p>Viento: {weather.wind.speed} m/s</p>
            <p>Presión: {weather.main.pressure} hPa</p>
          </div>
        </WeatherCard>
      )}
    </div>
  );
};

export default Weather;

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
