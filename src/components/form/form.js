import {
  getInputElement,
  getErrorMessageElement,
} from 'helpers/dom';
class Form {
  formWasSubmitted = false;

  constructor(id, name, inputs, errors) {
    this.id = id;
    this.name = name;
    this.inputs = inputs;
    this.errors = errors;
  }

  /** EVENTS */
  listenFormSubmission(onFormSubmit) {
    document.getElementById(this.id).addEventListener('submit', (event) => {
      event.preventDefault();
      this.formWasSubmitted = true;

      if (this.validateForm()) {
        console.log('Form was successfully submitted');
        onFormSubmit();
      }
    });
  }

  listenInputsChange() {
    const inputs = document.getElementsByClassName(`${this.name}_input`);
    for (let inputElement of inputs) {
      inputElement.addEventListener('input', () => {
        this.formWasSubmitted && this.validateInput(inputElement.name);
      });
    }
  }

  /** HELPERS */
  showErrorMessageFor(field, show = true) {
    const inputElement = getInputElement(this.name, field);
    const errorMessageElement = getErrorMessageElement(this.name, field);
    if (!errorMessageElement) return;

    if (show) {
      errorMessageElement.classList.remove('hidden');
      errorMessageElement.innerHTML = !inputElement.value
        ? this.errors[field].emptyField
        : this.errors[field].general;
      inputElement.classList.add('input_invalid');
    } else {
      errorMessageElement.classList.add('hidden');
      inputElement.classList.remove('input_invalid');
    }
  }

  validateForm() {
    let validationFail = false;

    this.inputs.forEach(inputName => {
      if (!this.isInputValid(inputName)) {
        this.showErrorMessageFor(inputName, true);
        validationFail = true;
      }
    });

    return !validationFail;
  }

  isInputValid(inputName) {
    const inputElement = getInputElement(this.name, inputName);

    if (!inputElement.value) return false;

    if (this.errors[inputName].customValidator) {
      return this.errors[inputName].customValidator();
    }

    return inputElement.validity.valid;
  }

  validateInput(field) {
    !this.isInputValid(field)
      ? this.showErrorMessageFor(field, true)
      : this.showErrorMessageFor(field, false);

    const dependentFields = this.errors[field].dependentFields;
    if (dependentFields) {
      dependentFields.forEach(dependentField => {
        !this.isInputValid(dependentField)
          ? this.showErrorMessageFor(dependentField, true)
          : this.showErrorMessageFor(dependentField, false);
      });
    }
  }
}

export default Form;