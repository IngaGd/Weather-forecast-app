import { useGetWeather } from "../../hooks/useGetWeather";
import { LineChart } from "@mui/x-charts/LineChart";

export function WeatherData() {
  const { weather } = useGetWeather();
  // if (!weather || weather.length === 0) {
  //   return <div>Loading weather data...</div>;
  // }

  const mokData = [
    {
      time: new Date("2025-03-16 08:00:00").getTime(),
      weather: {
        temperature: 2.5,
        feelsLike: -2.7,
        windSpeed: 7,
        windDirection: 261,
        condition: "cloudy",
      },
    },
    {
      time: new Date("2025-03-17 09:00:00").getTime(),
      weather: {
        temperature: 3.5,
        feelsLike: -2.7,
        windSpeed: 7,
        windDirection: 261,
        condition: "cloudy",
      },
    },
    {
      time: new Date("2025-03-18 10:00:00").getTime(),
      weather: {
        temperature: 4.5,
        feelsLike: -2.7,
        windSpeed: 7,
        windDirection: 261,
        condition: "cloudy",
      },
    },
  ];

  const mapTime = weather.map((wetherOption) => wetherOption.time);
  const mapTemperature = weather.map(
    (wetherOption) => wetherOption.temperature
  );
  const mapFeelsLike = weather.map((wetherOption) => wetherOption.feelsLike);
  const mapWindSpeed = weather.map((wetherOption) => wetherOption.windSpeed);
  const mapWindDirection = weather.map(
    (wetherOption) => wetherOption.windDirection
  );

  return (
    <div>
      <LineChart
        xAxis={[
          {
            data: mapTime,
            scaleType: "time",
            axisLine: { stroke: "blue" },
            tickLabelStyle: { fill: "blue" },
            tickLine: { stroke: "blue" },
          },
        ]}
        yAxis={[
          {
            label: "Temperature",
            labelStyle: { stroke: "green" },
            axisLine: { stroke: "green" },
            tickLabelStyle: { fill: "green" },
            tickLine: { stroke: "green" },
          },
        ]}
        series={[
          {
            data: mapTemperature,
            color: "red",
          },
        ]}
        width={500}
        height={300}
      />
      <LineChart
        xAxis={[
          {
            data: mapTime,
            scaleType: "time",
            axisLine: { stroke: "blue" },
            tickLabelStyle: { fill: "blue" },
            tickLine: { stroke: "blue" },
          },
        ]}
        yAxis={[
          {
            label: "Temp. feels like",
            labelStyle: { stroke: "green" },
            axisLine: { stroke: "green" },
            tickLabelStyle: { fill: "green" },
            tickLine: { stroke: "green" },
          },
        ]}
        series={[
          {
            data: mapFeelsLike,
            color: "red",
          },
        ]}
        width={500}
        height={300}
      />
      <LineChart
        xAxis={[
          {
            data: mapTime,
            scaleType: "time",
            axisLine: { stroke: "blue" },
            tickLabelStyle: { fill: "blue" },
            tickLine: { stroke: "blue" },
          },
        ]}
        yAxis={[
          {
            label: "Wind Speed",
            labelStyle: { stroke: "green" },
            axisLine: { stroke: "green" },
            tickLabelStyle: { fill: "green" },
            tickLine: { stroke: "green" },
          },
        ]}
        series={[
          {
            data: mapWindSpeed,
            color: "red",
          },
        ]}
        width={500}
        height={300}
      />
      <LineChart
        xAxis={[
          {
            data: mapTime,
            scaleType: "time",
            axisLine: { stroke: "blue" },
            tickLabelStyle: { fill: "blue" },
            tickLine: { stroke: "blue" },
          },
        ]}
        yAxis={[
          {
            label: "Wind direction",
            labelStyle: { stroke: "green" },
            axisLine: { stroke: "green" },
            tickLabelStyle: { fill: "green" },
            tickLine: { stroke: "green" },
          },
        ]}
        series={[
          {
            data: mapWindDirection,
            color: "red",
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}
