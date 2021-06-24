/* Callback функция для получения одного вычисляемого значения массива

Функции add, sub и mult принимают два параметра - accum и element , возвращает число - сумму, разность или произведение параметров.

Дополни тело функции reduceArray строкой присвоения accum вызова функции cb. Функция reduceArray должна будет подсчитать сумму или разность или произведение всех элементов массива в зависимости от того какая именно из трех функция (add, mult, sub) будет передана в качестве cb.
*/
const add = (accum, element) => accum + element;
const mult = (accum, element) => accum * element;
const sub = (accum, element) => accum - element;

function reduceArray(array, cb, initial) {
  let i;
  let accum;
  if (arguments.length >= 3) {
    accum = initial;
    i = 0;
    console.log(`строка 17 - `, accum); //
  }
  if (arguments.length === 2) {
    accum = array[0];
    console.log(`строка 20 - `, accum); //
    i = 1;
  }
  for (i; i < array.length; i += 1) {
    console.log(`строка 26 - `, accum); //
    console.log(`строка 27 - `, array[i]); //
    const element = array[i];
    accum = cb(accum, element);
  }

  return accum;
}
const arr = [44, 44, 44, 44, 44];
// const arr = [1, 2, 3, 4, 5];

console.log(`сумма функции add (2 значения): `, reduceArray(arr, add)); // 15
console.log(`сумма функции add (3 значения): `, reduceArray(arr, add, 22)); // 25

console.log(`сумма функции mult (2 значения): `, reduceArray(arr, mult)); // 120
console.log(`сумма функции mult (3 значения): `, reduceArray(arr, mult, 10)); // 1200

console.log(`сумма функции sub (2 значения): `, reduceArray(arr, sub)); // -13
console.log(`сумма функции sub (3 значения): `, reduceArray(arr, sub, 10)); // -5
