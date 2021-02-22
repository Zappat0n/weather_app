import viewHelper from './helper';

const display = (data) => {
  console.log(data);
  const container = document.querySelector('.container_display');
  container.innerHTML = '';
  viewHelper().addElement(container, 'p', `${data.weather[0].description}`, ['content']);
};


export default display;
