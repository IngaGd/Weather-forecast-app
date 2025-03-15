import { useEffect, useState } from "react";

export function useLocalStorage() {
  const [viewedCities, setViewedCities] = useState(() => {
    try {
      const storedItems = localStorage.getItem("viewedCities");
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error("Error parsing localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("viewedCities", JSON.stringify(viewedCities));
  }, [viewedCities]);

  const addCity = (newCity) => {
    const prevCitiesMatch = viewedCities.find((el) => el.id === newCity.id);

    if (prevCitiesMatch) {
      setViewedCities((prevCities) =>
        prevCities.map((city) =>
          city.id === newCity.id ? { ...city, views: city.views + 1 } : city
        )
      );
    } else {
      setViewedCities((prevCities) => [
        ...prevCities,
        { ...newCity, views: 1 },
      ]);
    }
  };
  return { viewedCities, addCity };
}
