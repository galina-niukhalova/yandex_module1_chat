import errorTemplate from './error.tmpl.hbs';
import './error.style.scss';

function renderError() {
  return errorTemplate();
}

export default renderError;