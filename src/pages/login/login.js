import loginTemplate from './login.tmpl.hbs';
import './login.style.scss';

function renderLoginPage() {
  document.body.innerHTML = loginTemplate();
}

export default renderLoginPage;