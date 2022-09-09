
let counterValue = 0

const value = document.querySelector('#value')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')


const valueDecrease = () => {
    counterValue -= 1
    value.textContent = counterValue
  
}

const valueIncrease = () => {
   counterValue += 1
   value.textContent = counterValue
}

decrementBtn.addEventListener('click', valueDecrease)
incrementBtn.addEventListener('click', valueIncrease)

