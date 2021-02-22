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

  const addImage = (container, url, alternative, classes) => {
    const element = addElement(container, 'img', null, classes);
    element.setAttribute('src', url);
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
    addImage,
    displayError,
  };
};

export { viewHelper as default };
