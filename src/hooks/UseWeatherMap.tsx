"use client";
import React, { useEffect, useState } from "react";
import { getweather, getforecast } from "@/api/endpoints/pronosticos";
import { Coord, List, RainXDay, WeatherXDay } from "@/interfaces/appInterface";
export const UseWeatherMap = () => {
  const [weather, setWeather] = useState<WeatherXDay[]>([]);
  const [forecast, setForecast] = useState<List[]>([]);
  const [coordinates, setCoordinates] = useState<Coord>({
    lat: null,
    lon: null,
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /////detectar ubicacion
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("UBICACION NO SOPORTADA POR EL NAVEGADOR ");
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, []);

  const getWeather = async () => {
    try {
      setIsLoading(true);
      console.log(coordinates);
      if (coordinates.lat !== null && coordinates.lon !== null) {
        const res = await getweather(coordinates.lon, coordinates.lat);
        setWeather(res);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getForecast = async () => {
    try {
      setIsLoading(true);
      console.log(coordinates);
      if (coordinates.lat !== null && coordinates.lon !== null) {
        const res = await getforecast(coordinates.lat, coordinates.lon);

        setForecast(res);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    weather,
    forecast,
    coordinates,
    setCoordinates,
    error,
    getWeather,
    getForecast,
    isLoading,
  };
};
