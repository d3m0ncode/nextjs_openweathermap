"use client";
import { UseWeatherMap } from "@/hooks/UseWeatherMap";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
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

  if (!weather || !weather.main || !weather.weather) {
    return <h2>Datos del clima no disponibles...</h2>;
  }

  return (
    <div className="flex justify-center pt-7 items-center ">
      {!weather ? (
        <h2>cargando....</h2>
      ) : (
        <div
          className=" shadow-md rounded-lg p-6 max-w-xs"
          style={{
            backgroundImage:
              "-webkit-linear-gradient(to right, rgba(35, 122, 87, 0.8), rgba(9, 48, 40, 0.8))" /* Chrome 10-25, Safari 5.1-6 */,
            backgroundImage:
              "linear-gradient(to right, rgba(23, 255, 162, 0.486), rgba(186, 11, 255, 0.674))" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
          }}
        >
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
        </div>
      )}
    </div>
  );
};

export default Weather;
