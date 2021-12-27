import signupTemplate from './signup.tmpl.hbs';
import './signup.style.scss';
import {
  getInputElement,
  getErrorMessageElement,
} from '../../helpers/dom';

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
    dependentFields: ['repeat-password']
  },
  'repeat-password': {
    general: "Пароли не совпадают",
    emptyField: "Поле обязательное для заполнения",
    dependentFields: ['password']
  }
}

/** STATES */
let formWasSubmitted = false;

/** EVENTS */
function listenFormSubmission() {
  document.getElementById(FORM_ID).addEventListener('submit', (event) => {
    event.preventDefault();
    formWasSubmitted = true;

    validateForm();
  })
}

function listenInputsChange() {
  const inputs = document.getElementsByClassName(`${FORM_NAME}_input`);
  for (let inputElement of inputs) {
    inputElement.addEventListener('input', () => {
      formWasSubmitted && validateInput(inputElement.name);
    })
  }
}

/** HELPERS */
function showErrorMessageFor(field, show = true) {
  const inputElement = getInputElement(FORM_NAME, field);
  const errorMessageElement = getErrorMessageElement(FORM_NAME, field);
  if (!errorMessageElement) return

  if (show) {
    errorMessageElement.classList.remove('hidden');
    errorMessageElement.innerHTML = !inputElement.value
      ? ERRORS[field].emptyField
      : ERRORS[field].general
    inputElement.classList.add('input_invalid');
  } else {
    errorMessageElement.classList.add('hidden');
    inputElement.classList.remove('input_invalid');
  }
}

function validateForm() {
  let validationFail = false;

  FORM_INPUTS.forEach(inputName => {
    if (!isInputValid(inputName)) {
      showErrorMessageFor(inputName, true);
      validationFail = true;
    }
  })

  if (!validationFail) {
    // signup request
    console.log('Signup was successful');
  }
}

function isInputValid(inputName) {
  const inputElement = getInputElement(FORM_NAME, inputName);

  if (!inputElement.value) return false;

  if (inputName === 'password' || inputName === 'repeat-password') {
    return isPasswordValid();
  }

  return inputElement.validity.valid;
}

function isPasswordValid() {
  const password = getInputElement(FORM_NAME, 'password');
  const repeatPassword = getInputElement(FORM_NAME, 'repeat-password');

  return password.value === repeatPassword.value;
}

function validateInput(field) {
  !isInputValid(field)
    ? showErrorMessageFor(field, true)
    : showErrorMessageFor(field, false);

  const dependentFields = ERRORS[field].dependentFields;
  if (dependentFields) {
    dependentFields.forEach(dependentField => {
      !isInputValid(dependentField)
        ? showErrorMessageFor(dependentField, true)
        : showErrorMessageFor(dependentField, false);
    })
  }
}

/** RENDER */
function renderSignupPage() {
  document.body.innerHTML = signupTemplate();

  listenFormSubmission();
  listenInputsChange();
}

export default renderSignupPage;