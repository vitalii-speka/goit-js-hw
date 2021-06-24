/*
 * Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре..

Результатом вызова функции должен быть булеан
Результатом вызова функции должна false, если аргумент - пустая строка
Для аргумента - строки 'Latest technology news' результатом будет false
Для аргумента - строки 'JavaScript weekly newsletter' результатом будет false
Для аргумента - строки 'Get best sale offers now!' результатом будет true
Для аргумента - строки '[SPAM] How to earn fast money?' результатом будет true
Ожидается использование метода '.includes'
Ожидается использование метода '.toLowerCase'

 */

function checkForSpam(str) {
  return str.toLowerCase().includes('spam') ||
    str.toLowerCase().includes('sale')
    ? true
    : false;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// function adult(age) {
//   return age > 18
//     ? 'Выполнилось 18, ты уже взрослый :)'
//     : 'Еще нет 18, вход запрещен :(';
// }

// // const age = 20;
// // const type = age >= 18 ? 'adult' : 'child';

// alert(adult(11)); // true
