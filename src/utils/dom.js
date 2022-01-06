function getInputElement(formName, inputName) {
  return document.getElementById(`${formName}_${inputName}-input`);
}

function getErrorMessageElement(formName, inputName) {
  return document.getElementById(`${formName}_${inputName}-error`);
}

export {
  getInputElement,
  getErrorMessageElement
};