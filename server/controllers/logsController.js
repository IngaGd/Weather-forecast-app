const fs = require("fs");
const path = require("path");

exports.logUserAction = async (req, res) => {
  const { cityCode } = req.body;
  console.log("code:", cityCode);

  const timeStamp = new Date().toString();

  const logData = { timeStamp, cityCode };
  const filePath = path.join(__dirname, "../data/logs.json");

  console.log(`User selected city: ${cityCode} at ${timeStamp}`);

  try {
    let logs = [];

    const fileData = fs.readFileSync(filePath, "utf8");
    logs = JSON.parse(fileData);

    logs.push(logData);

    fs.writeFileSync(filePath, JSON.stringify(logs), "utf8");
    res.status(200).json({ message: "Data saved to json db" });
  } catch (error) {
    console.error("Error writing to logs file:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
