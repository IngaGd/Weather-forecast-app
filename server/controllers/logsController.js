exports.logUserAction = async (req, res) => {
  const { cityCode, cityName } = req.body;
  const timeStamp = new Date().toString();

  console.log(`User selected city: ${cityCode}, ${cityName}, at ${timeStamp}`);

  res.status(200).json({ message: "ok" });
};
