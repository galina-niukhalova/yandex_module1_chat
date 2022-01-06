import signupTemplate from './signup.tmpl.hbs';
import './signup.style.scss';
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

/** RENDER */
function renderSignupPage() {
  document.body.innerHTML = signupTemplate();

  const signupForm = new Form(FORM_ID, FORM_NAME, FORM_INPUTS, ERRORS);
  signupForm.listenFormSubmission(handleFormSubmit);
  signupForm.listenInputsChange();
}

export default renderSignupPage;