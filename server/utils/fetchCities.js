let cities = [];
let citiesFetchError = null;

const fetchCities = async () => {
  try {
    const response = await fetch(
      "https://api.meteo.lt/v1/places",
      { timeout: 5000 },
      {
        method: "GET",
      }
    );
    if (!response.ok)
      throw new Error(`API response status: ${response.status}`);
    const data = await response.json();
    cities = data.map((d, index) => {
      return { id: index + 1, cityCode: d.code, cityName: d.name };
    });
    citiesFetchError = null;
  } catch (error) {
    citiesFetchError = `Failed to fetch city. ${error.message}`;
    console.error("Error fetching data", error);
  }
};

const getCitiesData = () => ({ cities, citiesFetchError });

module.exports = {
  fetchCities,
  getCitiesData,
};
