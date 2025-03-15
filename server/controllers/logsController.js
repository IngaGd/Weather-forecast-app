const fs = require("fs");
const path = require("path");

exports.logUserAction = async (req, res) => {
  const { cityCode, cityName } = req.body;
  const timeStamp = new Date().toString();
  const logData = { timeStamp, cityCode, cityName };
  const filePath = path.join(__dirname, "../data/logs.json");

  console.log(`User selected city: ${cityCode}, ${cityName}, at ${timeStamp}`);

  try {
    let logs = [];

    let fileData = fs.readFileSync(filePath, "utf8");
    fileData = JSON.parse(fileData);

    if (logData) {
      logs.push(logData);
    }

    fs.writeFileSync(filePath, JSON.stringify(logs), "utf8");
    res.status(200).json({ message: "Data saved to json db" });
  } catch (error) {
    console.error("Error writing to logs file:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
