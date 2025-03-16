import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const url = import.meta.env.VITE_URL;

export function useGetWeather() {
  const { selectedCity } = useContext(GlobalContext);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (!selectedCity || !selectedCity.code) {
      return;
    }
    const getData = async () => {
      try {
        const response = await fetch(
          `${url}forecast?placeCode=${selectedCity.code}`,
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error("Data failed to fetch");
        }
        const data = await response.json();
        if (!data.forecastTimestamps) throw new Error("Invalid data");
        const formattedData = data.forecastTimestamps?.map((entry) => ({
          // id: 1,
          time: new Date(entry.forecastTimeUtc).getTime(),
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
  }, [selectedCity]);

  return { weather };
}
