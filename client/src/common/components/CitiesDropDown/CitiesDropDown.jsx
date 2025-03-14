import { useState } from "react";
import { useGetDataFetch } from "../../hooks/useGetDataFetch";
import { Input } from "../Input/Input";

export function CitiesDropDown() {
  const [citySearch, setCitySearch] = useState("");
  const letter = citySearch[0];
  const { cities } = useGetDataFetch({ letter });

  return (
    <div>
      <Input citySearch={citySearch} setCitySearch={setCitySearch} />
      <div>
        {cities?.map((city) => (
          <div key={city.id}>{city.cityName}</div>
        ))}
      </div>
    </div>
  );
}
