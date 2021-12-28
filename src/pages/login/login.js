import loginTemplate from './login.tmpl.hbs';
import './login.style.scss';
import Form from 'components/form';

/** CONST */
const FORM_NAME = 'login-form';
const FORM_ID = 'login';
const FORM_INPUTS = [
  'login',
  'password'
]

const ERRORS = {
  login: {
    general: 'Неверный логин',
    emptyField: 'Укажите пожалуйста логин'
  },
  password: {
    emptyField: 'Задайте пожалуйста пароль',
  }
}

/** HELPERS */
function handleFormSubmit() {
  window.location.href = '/chats';
}


/** RENDER */
function renderLoginPage() {
  document.body.innerHTML = loginTemplate();

  const loginForm = new Form(FORM_ID, FORM_NAME, FORM_INPUTS, ERRORS);
  loginForm.listenFormSubmission(handleFormSubmit);
  loginForm.listenInputsChange();
}

export default renderLoginPage;