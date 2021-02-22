import requests from '../apis/requestManager';
import display from './display';
import viewHelper from './helper';

const mainForm = (container) => {
  const addButton = () => {
    const button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.classList.add('button');
    return button;
  };

  async function requestData(request) {
    const data = await requests.getCityWeather(request);
    display(data);
  }

  const create = () => {
    const form = document.createElement('form');
    container.appendChild(form);
    form.setAttribute('id', 'main_form');
    form.classList.add('form');
    form.appendChild(viewHelper().addField('location', 'Location', 'text', true, null, 'input_location'));
    form.appendChild(addButton());
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      requestData(e.target.elements.location.value);
    });
  };

  return { create };
};

export default mainForm;
