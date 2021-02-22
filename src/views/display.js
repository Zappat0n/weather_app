import viewHelper from './helper';

const display = (data) => {
  console.log(data);
  const container = document.querySelector('.container_display');
  container.innerHTML = '';
  viewHelper().addElement(container, 'p', `${data.name}, country: ${data.sys.country}`, ['content']);
  viewHelper().addElement(container, 'p', `Date: ${new Date(data.dt)}`, ['content']);
  viewHelper().addElement(container, 'p', `Temperature: ${data.main.temp}, min: ${data.main.temp_min}, max: ${data.main.temp_max}`, ['content']);
  viewHelper().addElement(container, 'p', `Wind. Speed: ${data.wind.speed}, direction: ${data.wind.deg}`, ['content']);

  viewHelper().addElement(container, 'p', `Weather: ${data.weather[0].description}`, ['content']);
};


export default display;
