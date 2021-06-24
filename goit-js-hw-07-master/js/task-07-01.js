/* Напиши скрипт, который выполнит следующие операции.
<ul id="categories">
      <li class="item">
        <h2>Животные</h2>
        <ul>
          <li>Кот</li>
          <li>Хомяк</li>
          <li>Лошадь</li>
          <li>Попугай</li>
        </ul>
      </li>
      <li class="item">
        <h2>Продукты</h2>
        <ul>
          <li>Хлеб</li>
          <li>Петрушка</li>
          <li>Творог</li>
        </ul>
      </li>
      <li class="item">
        <h2>Технологии</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </li>
    </ul>
Посчитает и выведет в консоль количество категорий в ul#categories, то есть
элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
текст заголовка элемента (тега h2) и количество элементов в категории (всех
вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные 
Количество элементов: 4

*/

const totalLiItemRef = document.querySelectorAll('.item');

console.log(`В списке ${totalLiItemRef.length} категории.`);

totalLiItemRef.forEach(el => {
  console.log(`Категория: ${el.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${el.lastElementChild.children.length}`);
});

/* старый вариант, нужно заменить на forEach
const categoriesArray = [...totalLiItemRef]
  .map(
    categories => `Категория: ${categories.firstElementChild.textContent}
Количество элементов: ${categories.lastElementChild.children.length}`,
  )
  .join('\n');
console.log(categoriesArray);
*/
