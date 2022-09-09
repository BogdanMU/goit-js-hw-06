const formValidationInput = document.querySelector('#validation-input')

formValidationInput.addEventListener('blur', isValid)


function isValid() {
    if (Number(formValidationInput.value.length) === Number(formValidationInput.dataset.length)) {
        formValidationInput.classList.add('valid')
        formValidationInput.classList.remove('invalid')
    } else {
        formValidationInput.classList.add('invalid')
        formValidationInput.classList.remove('valid')
    }

   

}

