import { useGetWeather } from "../../hooks/useGetWeather";
import { LineChart } from "@mui/x-charts/LineChart";
import { usePostUserAction } from "../../hooks/usePostUserAction";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import styles from "./weatherData.module.scss";

export function WeatherData() {
  const { cityCode } = useContext(GlobalContext);
  const { weather } = useGetWeather();
  const { postData } = usePostUserAction();

  useEffect(() => {
    if (weather.length !== 0) {
      postData(cityCode);
    }
  }, [weather]);

  if (!weather || weather.length === 0) {
    return <div className={styles.loading}>Waiting weather data...</div>;
  }

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
    <div className={styles.container}>
      <div className={styles.currentWeather}>
        <div className={styles.heading}> Current weather conditions </div>
        <div className={styles.condition}>
          <div>Temperature: {weather[0].temperature} C</div>
          <div>Temperature feels like: {weather[0].feelsLike} C</div>
          <div>Wind speed: {weather[0].windSpeed}</div>
          <div>Wind direction: {weather[0].windDirection}</div>
        </div>
      </div>

      <div className={styles.heading}>Five days weather forecast</div>
      <div className={styles.forecast}>
        <LineChart
          xAxis={[
            {
              data: mapTime,
              scaleType: "time",
              tickLabelStyle: { fill: "yellowgreen" },
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
              color: "rgb(206, 107, 2)",
            },
          ]}
          width={400}
          height={300}
        />
        <LineChart
          xAxis={[
            {
              data: mapTime,
              scaleType: "time",
              tickLabelStyle: { fill: "yellowgreen" },
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
              color: "rgb(206, 107, 2)",
            },
          ]}
          width={400}
          height={300}
        />
        <LineChart
          xAxis={[
            {
              data: mapTime,
              scaleType: "time",
              tickLabelStyle: { fill: "yellowgreen" },
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
              color: "rgb(206, 107, 2)",
            },
          ]}
          width={400}
          height={300}
        />
        <LineChart
          xAxis={[
            {
              data: mapTime,
              scaleType: "time",
              tickLabelStyle: { fill: "yellowgreen" },
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
              color: "rgb(206, 107, 2)",
            },
          ]}
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}
