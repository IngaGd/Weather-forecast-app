import { CitiesDropDown } from "../../common/components/CitiesDropDown/CitiesDropDown";
import { WeatherData } from "../../common/components/WeatherData/WeatherData";
import styles from "./home.module.scss";

export function Home() {
  return (
    <div className={styles.home}>
      <h1>Weater forecats</h1>
      <CitiesDropDown />
      <WeatherData />
    </div>
  );
}
