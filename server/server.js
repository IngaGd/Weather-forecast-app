require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { fetchCities } = require("./utils/fetchCities");

const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: [`${process.env.SERVER_URL}`],
  methods: ["GET", "POST"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

fetchCities();

app.use("/api", require("./routes/places"));
app.use("/api", require("./routes/forecast"));
app.use("/api", require("./routes/logs"));

app.listen(port, () => {
  console.log(`Server is started on port: ${port}`);
});
