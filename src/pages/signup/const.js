import { isPasswordValid } from './utils';

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
];

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
    customValidator: isPasswordValid.bind(this, FORM_NAME),
  },
  'repeat-password': {
    general: "Пароли не совпадают",
    emptyField: "Поле обязательное для заполнения",
    dependentFields: ['password'],
    customValidator: isPasswordValid.bind(this, FORM_NAME),
  }
};

export {
  FORM_NAME,
  FORM_ID,
  FORM_INPUTS,
  ERRORS
};