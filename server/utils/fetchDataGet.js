let weather = [];
let fetchDataGetError = null;

const fetchDataGet = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok)
      throw new Error(`API response status: ${response.status}`);
    const data = await response.json();
    weather = data;
    fetchDataGetError = null;
  } catch (error) {
    fetchDataGetError = `Failed to fetch city. ${error.message}`;
    console.error("Error fetching data", error);
  }
};

const getData = () => ({ weather, fetchDataGetError });

module.exports = {
  fetchDataGet,
  getData,
};
