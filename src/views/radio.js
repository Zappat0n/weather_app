import viewHelper from './helper';

const radio = (container) => {
  const create = () => {
    container.appendChild(viewHelper().addField('degrees', 'Celsius', 'radio', true, 'celsius', 'celsius_input'));
    container.appendChild(viewHelper().addField('degrees', 'Fahrenheit', 'radio', true, 'fahrenheit', 'fahrenheit_input'));
    document.querySelector('.celsius_input').setAttribute('checked', 'checked');
  };

  return { create };
};

export default radio;
