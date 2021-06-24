/* Задание 5
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
*/

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener(
  'input',
  () =>
    (output.textContent = input.value.length > 0 ? input.value : 'незнакомец'),
);
