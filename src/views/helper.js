const viewHelper = () => {
  const addElement = (container, type, _textContent, classes) => {
    const element = document.createElement(type);
    if (_textContent != null) {
      element.textContent = _textContent;
    }

    if (classes != null) {
      classes.forEach(value => element.classList.add(value));
    }
    container.appendChild(element);
    return element;
  };

  const addField = (field, text, type, required, value, className) => {
    const div = document.createElement('div');
    div.classList.add('form_field');

    const label = document.createElement('label');
    label.setAttribute('for', field);
    label.textContent = text;
    const input = document.createElement('input');
    input.classList.add(className);
    input.setAttribute('type', type);
    input.setAttribute('name', field);
    input.setAttribute('id', field);
    if (required) {
      input.setAttribute('required', true);
    }
    if (value != null) {
      input.setAttribute('value', value);
    }
    div.appendChild(label);
    div.appendChild(input);
    return div;
  };

  const addImage = (container, url, alternative, classes) => {
    const element = addElement(container, 'img', null, classes);
    element.src = url;
    element.alt = alternative;
    element.setAttribute('alt', alternative);
    return element;
  };

  const displayError = (message) => {
    const container = document.querySelector('.warnings');
    container.innerHTML = '';
    addElement(container, 'p', message, ['warning']);
    setTimeout(() => {
      container.innerHTML = '';
    }, 2000);
  };

  return {
    addElement,
    addField,
    addImage,
    displayError,
  };
};

export { viewHelper as default };
