import signupTemplate from './signup.tmpl.hbs';
import './signup.style.scss';
import Form from 'components/form';
import { getInputElement } from 'helpers/dom';

/** CONST */
const FORM_NAME = 'signup-form';
const FORM_ID = 'signup';
const FORM_INPUTS = [
  'email',
  'login',
  'first-name',
  'second-name',
  'phone',
  'password',
  'repeat-password'
]

const ERRORS = {
  email: {
    general: 'Неверная почта',
    emptyField: 'Укажите пожалуйста почту'
  },
  login: {
    emptyField: 'Укажите пожалуйста логин',
  },
  'first-name': {
    emptyField: "Укажите пожалуйста имя",
  },
  'second-name': {
    emptyField: "Укажите пожалуйста фамилию"
  },
  phone: {
    emptyField: "Укажите пожалуйста телефон",
  },
  password: {
    emptyField: "Поле обязательное для заполнения",
    general: "Пароли не совпадают",
    dependentFields: ['repeat-password'],
    customValidator: isPasswordValid,
  },
  'repeat-password': {
    general: "Пароли не совпадают",
    emptyField: "Поле обязательное для заполнения",
    dependentFields: ['password'],
    customValidator: isPasswordValid,
  }
}

/** HELPERS */
function isPasswordValid() {
  const password = getInputElement(FORM_NAME, 'password');
  const repeatPassword = getInputElement(FORM_NAME, 'repeat-password');

  return password.value === repeatPassword.value;
}

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