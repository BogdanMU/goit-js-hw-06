// Напиши скрипт который:
// 1. Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и
// количество элементов в категории(всех вложенных в него < li >).

/////////////////////////////////  1  //////////////////////////

const categoriesList = document.getElementById('categories')
console.log(`Number of categories : ${categoriesList.children.length}`);


/////////////////////////  Or this way.

// const categoriesQuantity = document.querySelectorAll('.item')
// console.log(`Number of categories : ${categoriesQuantity.length}`);



/////////////////////////////////   2   ////////////////////


const categoriesItems = document.querySelectorAll('.item')


categoriesItems.forEach((element, index) => {
    if (index === 0) {
        console.log(' ');
    }
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
    if (index !== categoriesItems.length - 1) {
        console.log(' ');
    }
  
});

