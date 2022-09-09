function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

const colorChangeBtn = document.querySelector('.change-color')
const currentColorValue = document.querySelector('.color')


colorChangeBtn.addEventListener('click', colorChange)

function colorChange() {
  document.body.style.backgroundColor = getRandomHexColor()
  currentColorValue.innerHTML =`${document.body.style.backgroundColor}`
} 