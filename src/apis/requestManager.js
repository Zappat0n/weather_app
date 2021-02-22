import getCityWeatherRequest from './openweather';

const requests = {
  async getCityWeather(name) {
    const request = getCityWeatherRequest(name);
    try {
      const response = await fetch(request);
      return response.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default requests;
