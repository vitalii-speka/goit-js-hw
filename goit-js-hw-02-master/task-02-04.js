/*
 * Форматирование строки в зависимости от длинны строки

Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.
 */

// function formatString(string, maxLength = 40) {
//   // console.log(string.length);

//   if (string.length > maxLength) {
//     return string.splice(0, 1, 2);
//     // sliced += '...';
//     // console.log('Работает, теперь нужно обрезать буквы до 40 шт..');
//     return;
//   }

//   // if (amount > balance) {
//   //   console.log('Недостаточно средств на счету.');
//   //   return;
//   // }

//   console.log(string);
// }

function formatString(string, maxLength = 40) {
  let breakSentence = string.split('');

  if (breakSentence.length > maxLength) {
    breakSentence.length = maxLength;
    return breakSentence.join('') + '...';
  } else if (
    (breakSentence.length = maxLength || breakSentence.length < maxLength)
  ) {
    return breakSentence.join('');
  }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
