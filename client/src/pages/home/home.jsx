import { CitiesDropDown } from "../../common/components/CitiesDropDown/CitiesDropDown";
import { WeatherData } from "../../common/components/WeatherData/WeatherData";

export function Home() {
  return (
    <div>
      <h1>Weater forecats</h1>
      <div>
        <CitiesDropDown />
      </div>
      <div>
        <WeatherData />
      </div>
    </div>
  );
}
