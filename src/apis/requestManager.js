import getCityWeatherRequest from './openweather';

const requests = {
  async getCityWeather(name) {
    const request = getCityWeatherRequest(name);
    try {
      const response = await fetch(request);
      console.log(response.json());
    } catch (error) {
      console.log(error);
    }
  },
};

export default requests;
