import viewHelper from './helper';

const display = (data) => {
  const container = document.querySelector('.container_display');
  container.innerHTML = '';
  document.querySelector('.input_location').value = '';

  const flag = document.querySelector('.celsius_input').checked ? 'ºC' : 'ºF';

  viewHelper().addElement(container, 'p', `${data.name}, country: ${data.sys.country}`, ['content']);
  viewHelper().addElement(container, 'p', `Temperature: ${data.main.temp}${flag}, min: ${data.main.temp_min}${flag}, max: ${data.main.temp_max}${flag}`, ['content']);
  viewHelper().addElement(container, 'p', `Wind. Speed: ${data.wind.speed}, direction: ${data.wind.deg}º`, ['content']);
  const weatherContainer = viewHelper().addElement(container, 'div', null, ['weather_content']);
  viewHelper().addImage(weatherContainer, `./icons/${data.weather[0].icon}.png`, ['icon_weather']);
  viewHelper().addElement(weatherContainer, 'p', `${data.weather[0].description}`, ['content']);
};


export default display;
