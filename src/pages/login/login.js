import loginTemplate from './login.tmpl.hbs';
import './login.style.scss';
import Form from 'components/form';
import {
  FORM_NAME,
  FORM_ID,
  FORM_INPUTS,
  ERRORS
} from './const';

function handleFormSubmit() {
  window.location.href = '/chats';
}

function renderLoginPage() {
  document.body.innerHTML = loginTemplate();

  const loginForm = new Form(FORM_ID, FORM_NAME, FORM_INPUTS, ERRORS);
  loginForm.listenFormSubmission(handleFormSubmit);
  loginForm.listenInputsChange();
}

export default renderLoginPage;