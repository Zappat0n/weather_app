import './css/styles.scss';
import mainImage from './assets/images/spite_sun_rain.png';
import viewHelper from './views/helper';
import mainForm from './views/form';

const body = document.querySelector('body');
const container = viewHelper().addElement(body, 'div', null, ['container']);
const containerImage = viewHelper().addElement(container, 'div', null, ['container_image']);
viewHelper().addElement(containerImage, 'h1', 'My Weather App');
viewHelper().addImage(containerImage, mainImage, 'Sun and Rain', ['main_image']);

const formContainer = viewHelper().addElement(container, 'div', null, ['container_form']);
mainForm(container).create();

viewHelper().addElement(formContainer, 'div', null, ['container_display']);
