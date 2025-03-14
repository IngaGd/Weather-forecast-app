import { useState } from "react";
import { useGetDataFetch } from "../../hooks/useGetDataFetch";
import { Input } from "../Input/Input";

export function CitiesDropDown() {
  const [citySearch, setCitySearch] = useState("");
  const letter = citySearch[0];
  const { cities } = useGetDataFetch({ letter });

  const filteredCities = cities.filter((city) =>
    city.cityName.slice(1).startsWith(citySearch.slice(1))
  );

  return (
    <div>
      <Input citySearch={citySearch} setCitySearch={setCitySearch} />
      <div>
        {filteredCities?.map((city) => (
          <div key={city.id}>{city.cityName}</div>
        ))}
      </div>
    </div>
  );
}
