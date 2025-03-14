import { useEffect, useState } from "react";

const url = import.meta.env.VITE_URL;

export function useGetWeather() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${url}forecast`, {
          method: "GET",
          //   headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Data failed to fetch");
        }
        const data = await response.json();
        //setWeather(data);
        const formattedData = data.forecastTimestamps.map((entry) => ({
          // id: 1,
          time: entry.forecastTimeUtc,
          temperature: entry.airTemperature,
          feelsLike: entry.feelsLikeTemperature,
          windSpeed: entry.windSpeed,
          windDirection: entry.windDirection,
          condition: entry.conditionCode,
        }));
        setWeather(formattedData);
      } catch (error) {
        console.log("Error: ", error || error.message);
      }
    };
    getData();
  }, []);

  return { weather };
}
