const { getData, fetchDataGet } = require("../utils/fetchDataGet");

exports.getForecast = async (req, res) => {
  fetchDataGet("https://api.meteo.lt/v1/places/vilnius/forecasts/long-term");
  const { weather } = getData();
  if (!weather) {
    return res
      .status(500)
      .json({ message: "Failed to retrieve forecast data" });
  }

  res.json(weather);
};
