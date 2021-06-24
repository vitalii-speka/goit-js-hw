/*
 Подсчет стоимости гравировки украшений
Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

Для решения этой задачи не используйте циклы. Т.е. никаких for, while, do while, for of, for in, forEach или функциональных методов.
 */

// const calculateEngravingPrice = (
//   message.split(' ')
//     .length = 'Proin sociis natoque et magnis parturient montes mus',
//   pricePerWord = 10,
// ) => (sumOfAllWords = lengthOfAllWords * pricePerWord);

// Write code in this line
const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
  message.split(' ').length * pricePerWord;

const calculateEngravingPrice = function (message = ' ', pricePerWord = 0) {
  let lengthOfAllWords = message.split(' ').length;

  const sumOfAllWords = lengthOfAllWords * pricePerWord;

  return sumOfAllWords;
};

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120

console.log(calculateEngravingPrice('Uno', 100)); // 100
