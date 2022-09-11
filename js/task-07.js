// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputSlideBar = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text') 

textRef.style.fontSize = `${inputSlideBar.value}px`;

inputSlideBar.addEventListener('input', handleFontChanges)

function handleFontChanges() {
    textRef.style.fontSize = `${inputSlideBar.value}px`;
}