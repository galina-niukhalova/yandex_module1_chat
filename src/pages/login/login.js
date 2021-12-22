import loginTemplate from './login.tmpl.hbs';
import './login.style.scss';

function renderLoginPage() {
  return loginTemplate();
}

export default renderLoginPage;