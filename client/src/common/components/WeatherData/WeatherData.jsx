import { useGetWeather } from "../../hooks/useGetWeather";

export function WeatherData() {
  const { weather } = useGetWeather();
  return (
    <div>
      {weather?.map((w, index) => (
        <div key={index}>{w.temperature}</div>
      ))}
    </div>
  );
}
