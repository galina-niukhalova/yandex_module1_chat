import errorTemplate from './error.tmpl.hbs';
import './error.style.scss';

import Handlebars from 'handlebars';

function renderError() {
  return errorTemplate;
}

export default renderError;