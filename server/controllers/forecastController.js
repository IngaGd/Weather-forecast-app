const { getData, fetchDataGet } = require("../utils/fetchDataGet");

exports.getForecast = async (req, res) => {
  const placeCode = req.query.placeCode;
  if (!placeCode) return res.json([]);

  fetchDataGet(
    `https://api.meteo.lt/v1/places/${placeCode}/forecasts/long-term`
  );

  const { weather } = getData();

  if (!weather) {
    return res
      .status(500)
      .json({ message: "Failed to retrieve forecast data" });
  }

  res.json(weather);
};
