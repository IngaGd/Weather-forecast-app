import { useContext, useState } from "react";
import { useGetDataFetch } from "../../hooks/useGetDataFetch";
import { Input } from "../Input/Input";
import { GlobalContext } from "../../context/GlobalContext";
import { usePostUserAction } from "../../hooks/usePostUserAction";

export function CitiesDropDown() {
  const [citySearch, setCitySearch] = useState("");
  const { selectedCity, setSelectedCity } = useContext(GlobalContext);
  const letter = citySearch[0];
  const { cities } = useGetDataFetch({ letter });

  const filteredCities = cities.filter((city) =>
    city.cityName.slice(1).startsWith(citySearch.slice(1))
  );

  const handleClick = (city) => {
    console.log("selected id: ", city);
    if (!city) return;
    setSelectedCity({ id: city.id, code: city.cityCode, name: city.cityName });
  };

  usePostUserAction();

  return (
    <div>
      <Input
        citySearch={citySearch}
        setCitySearch={setCitySearch}
        selectedCity={selectedCity}
      />
      cityName: {selectedCity.name}
      <div>
        {filteredCities?.map((city) => (
          <div
            key={city.id}
            value={selectedCity}
            onClick={() => handleClick(city)}
          >
            {city.cityName}
          </div>
        ))}
      </div>
    </div>
  );
}
