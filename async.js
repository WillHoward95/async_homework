const getWeather = async () => {
  try {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=50&lon=-2&appid=523c9749e3e52caa0eef82c9d49cfd66"
    );

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getWeather();
