import signupTemplate from './signup.tmpl.hbs';
import './signup.style.scss';

function renderSignupPage() {
  return signupTemplate();
}

export default renderSignupPage;