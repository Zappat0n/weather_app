const apiKey = 'cc0adaa848afffcfc081615eb0570df1';

const getCityWeatherRequest = name => {
  return new Request(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`, {
    method: 'GET',
  });
};

export default getCityWeatherRequest;
