import getCityWeatherRequest from './openweather';
import viewHelper from '../views/helper';

const requests = {
  async getCityWeather(name) {
    const units = document.querySelector('.celsius_input').checked ? 'metric' : 'imperial';
    const request = getCityWeatherRequest(name, units);
    try {
      const response = await fetch(request);
      return response.json();
    } catch (error) {
      viewHelper().displayError(error);
      return null;
    }
  },
};

export default requests;
