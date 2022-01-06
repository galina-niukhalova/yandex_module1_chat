import { getInputElement } from 'utils/dom';

function isPasswordValid(FORM_NAME) {
  const password = getInputElement(FORM_NAME, 'password');
  const repeatPassword = getInputElement(FORM_NAME, 'repeat-password');

  return password.value === repeatPassword.value;
}

export {
  isPasswordValid
};