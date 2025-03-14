const { getCitiesData } = require("../utils/fetchCities");

exports.getPlaces = async (req, res) => {
  console.log("Received request to /api/places");
  const { letter } = req.query;
  console.log(letter);

  if (!letter) return res.json([]);

  const { cities, citiesFetchError } = getCitiesData();

  if (citiesFetchError)
    return res.status(500).json({ message: citiesFetchError });

  const filteredCities = cities.filter(
    (city) => city.cityName[0].toLowerCase() === letter.toLowerCase()
  );

  res.json(filteredCities);
};
