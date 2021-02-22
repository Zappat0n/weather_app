import './css/styles.scss';
import viewHelper from './views/helper';
import mainForm from './views/form';
import radio from './views/radio';

const body = document.querySelector('body');
const container = viewHelper().addElement(body, 'div', null, ['container']);
viewHelper().addElement(container, 'h1', 'My Weather App');
const radioContainer = viewHelper().addElement(container, 'div', null, ['container_degrees']);
radio(radioContainer).create();
mainForm(container).create();

viewHelper().addElement(container, 'div', null, ['container_display']);
viewHelper().addElement(container, 'div', null, ['warnings']);
