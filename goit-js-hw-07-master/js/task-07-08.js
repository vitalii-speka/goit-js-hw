/* Задание 8 - дополнительное, выполнять не обязательно 

Напиши скрипт создания и
очистки коллекции элементов. Пользователь вводит количество элементов в input и
нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку
Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
Функция создает столько div, сколько указано в amount и добавляет их в
div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона Размеры самого первого div - 30px на 30px Каждый
следующий div после первого, должен быть шире и выше предыдущего на 10px Создай
функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>

*/
const boxesRef = document.querySelector('#boxes');
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy" ]');
const controlsRef = document.querySelector('#controls input');

renderRef.addEventListener('click', getAmount);
destroyRef.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

function getAmount(amount) {
  amount = controlsRef.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxesRef.appendChild(fragment);
}

function random() {
  return Math.floor(Math.random() * 256);
}
