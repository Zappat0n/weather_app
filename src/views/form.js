import requests from '../apis/requestManager';
import display from './display';

const mainForm = (container) => {
  const addButton = () => {
    const button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.classList.add('button');
    return button;
  };

  const addField = () => {
    const div = document.createElement('div');
    div.classList.add('form_field');
    const label = document.createElement('label');
    label.setAttribute('for', 'location');
    label.textContent = 'Location';
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'location');
    input.setAttribute('id', 'location');
    input.setAttribute('required', true);
    div.appendChild(label);
    div.appendChild(input);
    return div;
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
    form.appendChild(addField());
    form.appendChild(addButton());
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      requestData(e.target.elements.location.value);
    });
  };

  return { create };
};

export default mainForm;
