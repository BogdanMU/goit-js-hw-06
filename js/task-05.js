const inputField = document.querySelector('#name-input')
const outputField = document.querySelector('#name-output')

console.log(inputField);
console.log(outputField);

inputField.addEventListener('input', changeOutput)


function changeOutput() {
    if (inputField.value === '') {
           outputField.textContent = "Anonymous"
    } else {
        outputField.textContent = inputField.value
    }
}

