/* 
 HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elements = ingredients.map(num => {
  const listLi = document.createElement('li');
  listLi.textContent = num;

  return listLi;
});

const newRef = document.getElementById('ingredients');
newRef.append(...elements);

/* такой медот работает, но использовать рано
const ingredientsRef = document.getElementById('ingredients');
console.log(ingredientsRef);

ingredientsRef.insertAdjacentHTML(
  'beforeend',
  ingredients.reduce((string, item) => string + `<li>${item}</li>`, ''),
);
*/
