require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: [`${process.env.SERVER_URL}`],
  methods: ["GET", "POST"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

let cities = [];

const fetchCities = async () => {
  try {
    const response = await fetch("https://api.meteo.lt/v1/places", {
      method: "GET",
    });
    if (!response.ok)
      throw new Error(`API response status: ${response.status}`);
    const data = await response.json();
    cities = data.map((d, index) => {
      return { id: index + 1, cityCode: d.code, cityName: d.name };
    });
    console.log("cities: ", cities);
    citiesFetchError = null;
  } catch (error) {
    citiesFetchError = `Failed to fetch city. ${error.message}`;
    console.error("Error fetching data", error);
  }
};

fetchCities();

app.get("/api/places", async (req, res) => {
  console.log("Received request to /api/places");
  const { letter } = req.query;
  console.log(letter);

  const filteredCities = cities.filter(
    (city) => city.cityName[0].toLowerCase() === letter.toLowerCase()
  );

  res.json(filteredCities);
});

app.listen(port, () => {
  console.log(`Server is started on port: ${port}`);
});
