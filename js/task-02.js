const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

const arr = []

ingredients.forEach((element,index) => {
  element = document.createElement('li')
  element.textContent = ingredients[index]
  arr.push(element)
});

ingredientsList.append(...arr)

console.log(ingredientsList);