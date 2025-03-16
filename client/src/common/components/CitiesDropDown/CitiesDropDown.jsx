import { useContext, useEffect, useState } from "react";
import { useGetDataFetch } from "../../hooks/useGetDataFetch";
import { Input } from "../Input/Input";
import { GlobalContext } from "../../context/GlobalContext";
import { usePostUserAction } from "../../hooks/usePostUserAction";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import styles from "./citesDropDown.module.scss";

export function CitiesDropDown() {
  const [citySearch, setCitySearch] = useState("");
  const { selectedCity, setSelectedCity, setCityCode } =
    useContext(GlobalContext);
  const { addCity, sortedCities } = useLocalStorage();
  const letter = citySearch[0];
  const { cities } = useGetDataFetch({ letter });
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const filteredCities = cities.filter((city) =>
    city.cityName.slice(1).startsWith(citySearch.slice(1))
  );

  useEffect(() => {
    if (citySearch.length > 0) {
      setIsDropdownVisible(true);
    } else {
      setIsDropdownVisible(false);
    }
  }, [citySearch]);

  const handleClick = (city) => {
    console.log("selected id: ", city);
    if (!city) return;
    setSelectedCity({ id: city.id, code: city.cityCode, name: city.cityName });
    addCity({ id: city.id, code: city.cityCode, name: city.cityName });
    setIsDropdownVisible(false);
    setCityCode(city.cityCode);
  };

  const handleSortedCityClick = (city) => {
    console.log("Clicked sorted city:", city);
    setSelectedCity({ id: city.id, code: city.code, name: city.name });
    setCityCode(city.code);
  };

  return (
    <div>
      <Input
        citySearch={citySearch}
        setCitySearch={setCitySearch}
        selectedCity={selectedCity}
        // onFocus={handelSelection}
      />
      cityName: {selectedCity.name}
      <div>
        Select from mostly viewed:
        {sortedCities?.map((city) => (
          <div
            key={city.id}
            onClick={() => handleSortedCityClick(city)}
            // className={styles.city}
          >
            {city.name}
          </div>
        ))}
      </div>
      <div
        className={`${styles.dropDown} ${
          isDropdownVisible ? "" : styles.hidden
        }`}
      >
        {filteredCities?.map((city) => (
          <div
            key={city.id}
            onClick={() => handleClick(city)}
            className={styles.city}
          >
            {city.cityName}
            {isDropdownVisible}
          </div>
        ))}
      </div>
    </div>
  );
}
