const FORM_NAME = 'login-form';
const FORM_ID = 'login';
const FORM_INPUTS = [
  'login',
  'password'
];

const ERRORS = {
  login: {
    general: 'Неверный логин',
    emptyField: 'Укажите пожалуйста логин'
  },
  password: {
    emptyField: 'Задайте пожалуйста пароль',
  }
};

export {
  FORM_NAME,
  FORM_ID,
  FORM_INPUTS,
  ERRORS
};